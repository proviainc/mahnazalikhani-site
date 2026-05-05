import { getShortCardEntryUrl } from './card-urls';

const VERSION = 3;
const SIZE = 17 + VERSION * 4;
const DATA_CODEWORDS = 55;
const EC_CODEWORDS = 15;
const FORMAT_XOR = 0x5412;

type Matrix = Array<Array<boolean | null>>;
type Reserved = boolean[][];

function matrixRow(matrix: Matrix, y: number) {
  const row = matrix[y];
  if (!row) {
    throw new Error(`QR matrix row ${y} is out of bounds.`);
  }
  return row;
}

function reservedRow(reserved: Reserved, y: number) {
  const row = reserved[y];
  if (!row) {
    throw new Error(`QR reserved row ${y} is out of bounds.`);
  }
  return row;
}

function appendBits(bits: number[], value: number, length: number) {
  for (let i = length - 1; i >= 0; i -= 1) {
    bits.push(((value >>> i) & 1) === 1 ? 1 : 0);
  }
}

function makeDataCodewords(text: string) {
  const bytes = Array.from(new TextEncoder().encode(text));
  if (bytes.length > 53) {
    throw new Error('Card QR payload is too long for QR version 3-L.');
  }

  const bits: number[] = [];
  appendBits(bits, 0x4, 4);
  appendBits(bits, bytes.length, 8);
  bytes.forEach((byte) => appendBits(bits, byte, 8));

  const capacityBits = DATA_CODEWORDS * 8;
  appendBits(bits, 0, Math.min(4, capacityBits - bits.length));
  while (bits.length % 8 !== 0) {
    bits.push(0);
  }

  const codewords: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    codewords.push(parseInt(bits.slice(i, i + 8).join(''), 2));
  }

  for (let pad = 0xec; codewords.length < DATA_CODEWORDS; pad = pad === 0xec ? 0x11 : 0xec) {
    codewords.push(pad);
  }

  return codewords;
}

function gfMultiply(x: number, y: number) {
  let product = 0;
  for (let i = 7; i >= 0; i -= 1) {
    product = (product << 1) ^ ((product >>> 7) * 0x11d);
    product ^= ((y >>> i) & 1) * x;
  }
  return product & 0xff;
}

function reedSolomonDivisor(degree: number) {
  const result = Array<number>(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;

  for (let i = 0; i < degree; i += 1) {
    for (let j = 0; j < degree; j += 1) {
      result[j] = gfMultiply(result[j] ?? 0, root);
      if (j + 1 < degree) {
        result[j] = (result[j] ?? 0) ^ (result[j + 1] ?? 0);
      }
    }
    root = gfMultiply(root, 0x02);
  }

  return result;
}

function reedSolomonRemainder(data: number[]) {
  const divisor = reedSolomonDivisor(EC_CODEWORDS);
  const result = Array<number>(EC_CODEWORDS).fill(0);

  data.forEach((byte) => {
    const factor = byte ^ (result.shift() ?? 0);
    result.push(0);
    divisor.forEach((coefficient, index) => {
      result[index] = (result[index] ?? 0) ^ gfMultiply(coefficient, factor);
    });
  });

  return result;
}

function createMatrix(): { matrix: Matrix; reserved: Reserved } {
  return {
    matrix: Array.from({ length: SIZE }, () => Array<boolean | null>(SIZE).fill(null)),
    reserved: Array.from({ length: SIZE }, () => Array<boolean>(SIZE).fill(false)),
  };
}

function setModule(matrix: Matrix, reserved: Reserved, x: number, y: number, isDark: boolean, isReserved = true) {
  if (x < 0 || y < 0 || x >= SIZE || y >= SIZE) {
    return;
  }
  matrixRow(matrix, y)[x] = isDark;
  if (isReserved) {
    reservedRow(reserved, y)[x] = true;
  }
}

function drawFinder(matrix: Matrix, reserved: Reserved, left: number, top: number) {
  for (let y = -1; y <= 7; y += 1) {
    for (let x = -1; x <= 7; x += 1) {
      const xx = left + x;
      const yy = top + y;
      const isFinder =
        x >= 0 &&
        x <= 6 &&
        y >= 0 &&
        y <= 6 &&
        (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4));
      setModule(matrix, reserved, xx, yy, isFinder);
    }
  }
}

function drawAlignment(matrix: Matrix, reserved: Reserved, centerX: number, centerY: number) {
  for (let y = -2; y <= 2; y += 1) {
    for (let x = -2; x <= 2; x += 1) {
      const distance = Math.max(Math.abs(x), Math.abs(y));
      setModule(matrix, reserved, centerX + x, centerY + y, distance !== 1);
    }
  }
}

function drawFunctionPatterns(matrix: Matrix, reserved: Reserved) {
  drawFinder(matrix, reserved, 0, 0);
  drawFinder(matrix, reserved, SIZE - 7, 0);
  drawFinder(matrix, reserved, 0, SIZE - 7);
  drawAlignment(matrix, reserved, 22, 22);

  for (let i = 8; i < SIZE - 8; i += 1) {
    setModule(matrix, reserved, i, 6, i % 2 === 0);
    setModule(matrix, reserved, 6, i, i % 2 === 0);
  }

  for (let i = 0; i < 9; i += 1) {
    setModule(matrix, reserved, 8, i, false);
    setModule(matrix, reserved, i, 8, false);
    setModule(matrix, reserved, SIZE - 1 - i, 8, false);
    setModule(matrix, reserved, 8, SIZE - 1 - i, false);
  }
  setModule(matrix, reserved, 8, SIZE - 8, true);
}

function drawCodewords(matrix: Matrix, reserved: Reserved, codewords: number[]) {
  const bits = codewords.flatMap((codeword) =>
    Array.from({ length: 8 }, (_, index) => ((codeword >>> (7 - index)) & 1) === 1),
  );
  let bitIndex = 0;
  let upward = true;

  for (let right = SIZE - 1; right >= 1; right -= 2) {
    if (right === 6) {
      right -= 1;
    }

    for (let vertical = 0; vertical < SIZE; vertical += 1) {
      const y = upward ? SIZE - 1 - vertical : vertical;
      for (let column = 0; column < 2; column += 1) {
        const x = right - column;
        if (!reservedRow(reserved, y)[x]) {
          matrixRow(matrix, y)[x] = bits[bitIndex] ?? false;
          bitIndex += 1;
        }
      }
    }
    upward = !upward;
  }
}

function maskBit(mask: number, x: number, y: number) {
  switch (mask) {
    case 0:
      return (x + y) % 2 === 0;
    case 1:
      return y % 2 === 0;
    case 2:
      return x % 3 === 0;
    case 3:
      return (x + y) % 3 === 0;
    case 4:
      return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
    case 5:
      return ((x * y) % 2) + ((x * y) % 3) === 0;
    case 6:
      return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
    case 7:
      return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
    default:
      return false;
  }
}

function applyMask(matrix: Matrix, reserved: Reserved, mask: number) {
  const clone = matrix.map((row) => [...row]);
  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
      if (!reservedRow(reserved, y)[x] && maskBit(mask, x, y)) {
        const row = matrixRow(clone, y);
        row[x] = !row[x];
      }
    }
  }
  return clone;
}

function getFormatBits(mask: number) {
  let data = (1 << 3) | mask;
  let bits = data << 10;
  for (let i = 14; i >= 10; i -= 1) {
    if (((bits >>> i) & 1) !== 0) {
      bits ^= 0x537 << (i - 10);
    }
  }
  return ((data << 10) | bits) ^ FORMAT_XOR;
}

function drawFormatBits(matrix: Matrix, mask: number) {
  const bits = getFormatBits(mask);
  const bit = (index: number) => ((bits >>> index) & 1) === 1;

  for (let i = 0; i <= 5; i += 1) matrixRow(matrix, i)[8] = bit(i);
  matrixRow(matrix, 7)[8] = bit(6);
  matrixRow(matrix, 8)[8] = bit(7);
  matrixRow(matrix, 8)[7] = bit(8);
  for (let i = 9; i < 15; i += 1) matrixRow(matrix, 8)[14 - i] = bit(i);

  for (let i = 0; i < 8; i += 1) matrixRow(matrix, 8)[SIZE - 1 - i] = bit(i);
  for (let i = 8; i < 15; i += 1) matrixRow(matrix, SIZE - 15 + i)[8] = bit(i);
  matrixRow(matrix, SIZE - 8)[8] = true;
}

function countPenalty(matrix: Matrix) {
  let penalty = 0;

  for (let y = 0; y < SIZE; y += 1) {
    let runColor = matrixRow(matrix, y)[0];
    let runLength = 1;
    for (let x = 1; x < SIZE; x += 1) {
      if (matrixRow(matrix, y)[x] === runColor) {
        runLength += 1;
      } else {
        if (runLength >= 5) penalty += 3 + (runLength - 5);
        runColor = matrixRow(matrix, y)[x];
        runLength = 1;
      }
    }
    if (runLength >= 5) penalty += 3 + (runLength - 5);
  }

  for (let x = 0; x < SIZE; x += 1) {
    let runColor = matrixRow(matrix, 0)[x];
    let runLength = 1;
    for (let y = 1; y < SIZE; y += 1) {
      if (matrixRow(matrix, y)[x] === runColor) {
        runLength += 1;
      } else {
        if (runLength >= 5) penalty += 3 + (runLength - 5);
        runColor = matrixRow(matrix, y)[x];
        runLength = 1;
      }
    }
    if (runLength >= 5) penalty += 3 + (runLength - 5);
  }

  for (let y = 0; y < SIZE - 1; y += 1) {
    for (let x = 0; x < SIZE - 1; x += 1) {
      const color = matrixRow(matrix, y)[x];
      if (matrixRow(matrix, y)[x + 1] === color && matrixRow(matrix, y + 1)[x] === color && matrixRow(matrix, y + 1)[x + 1] === color) {
        penalty += 3;
      }
    }
  }

  const finderLike = [true, false, true, true, true, false, true, false, false, false, false];
  const reverseFinderLike = [...finderLike].reverse();
  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x <= SIZE - 11; x += 1) {
      const run = matrixRow(matrix, y).slice(x, x + 11);
      if (run.every((value, index) => value === finderLike[index]) || run.every((value, index) => value === reverseFinderLike[index])) {
        penalty += 40;
      }
    }
  }
  for (let x = 0; x < SIZE; x += 1) {
    for (let y = 0; y <= SIZE - 11; y += 1) {
      const run = Array.from({ length: 11 }, (_, index) => matrixRow(matrix, y + index)[x]);
      if (run.every((value, index) => value === finderLike[index]) || run.every((value, index) => value === reverseFinderLike[index])) {
        penalty += 40;
      }
    }
  }

  const darkModules = matrix.flat().filter(Boolean).length;
  const percentage = (darkModules * 100) / (SIZE * SIZE);
  penalty += Math.floor(Math.abs(percentage - 50) / 5) * 10;

  return penalty;
}

function buildQrMatrix(text: string) {
  const { matrix, reserved } = createMatrix();
  drawFunctionPatterns(matrix, reserved);

  const data = makeDataCodewords(text);
  drawCodewords(matrix, reserved, [...data, ...reedSolomonRemainder(data)]);

  let bestMatrix = matrix;
  let bestMask = 0;
  let bestPenalty = Number.POSITIVE_INFINITY;
  for (let mask = 0; mask < 8; mask += 1) {
    const candidate = applyMask(matrix, reserved, mask);
    drawFormatBits(candidate, mask);
    const penalty = countPenalty(candidate);
    if (penalty < bestPenalty) {
      bestPenalty = penalty;
      bestMask = mask;
      bestMatrix = candidate;
    }
  }
  drawFormatBits(bestMatrix, bestMask);
  return bestMatrix;
}

export function renderCardQrSvg({ width = 256, margin = 3 }: { width?: number; margin?: number } = {}) {
  const targetUrl = getShortCardEntryUrl();
  const matrix = buildQrMatrix(targetUrl);
  const viewBoxSize = SIZE + margin * 2;
  const darkPath = matrix
    .flatMap((row, y) =>
      row.map((isDark, x) => (isDark ? `M${x + margin},${y + margin}h1v1h-1z` : '')).filter(Boolean),
    )
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" role="img" aria-label="QR code for ${targetUrl}" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="#FBF7EF"/><path fill="#2A211C" d="${darkPath}"/></svg>`;
}
