import QRCode from 'qrcode';

type QrOptions = {
  /** SVG width/height in CSS pixels. */
  width?: number;
  /** QR quiet zone in modules; a larger quiet zone helps phone cameras lock on. */
  margin?: number;
};

export async function renderCardQrSvg(targetUrl: string, options: QrOptions = {}) {
  return QRCode.toString(targetUrl, {
    type: 'svg',
    width: options.width ?? 260,
    margin: options.margin ?? 4,
    errorCorrectionLevel: 'M',
    color: {
      dark: '#2A211C',
      light: '#FFFFFF',
    },
  });
}
