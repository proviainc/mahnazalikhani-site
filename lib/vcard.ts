import { siteConfig } from '../site.config';

const CRLF = '\r\n';

function escapeVcardText(value: string) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

function getNameParts(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const familyName = parts.pop() ?? '';
  return {
    givenName: parts.join(' '),
    familyName,
  };
}

export function getSiteJobTitle() {
  return 'Senior Event Planner and Event Strategist';
}

export function buildVcard() {
  const { givenName, familyName } = getNameParts(siteConfig.name);
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeVcardText(familyName)};${escapeVcardText(givenName)};;;`,
    `FN:${escapeVcardText(siteConfig.name)}`,
    `TITLE:${escapeVcardText(getSiteJobTitle())}`,
    'ORG:ProVia Events',
    `EMAIL;TYPE=WORK:${siteConfig.contact.work.email}`,
    `EMAIL;TYPE=HOME:${siteConfig.contact.personal.email}`,
    ...(siteConfig.contact.phoneVcardOnly ? [`TEL;TYPE=CELL:${siteConfig.contact.phoneVcardOnly}`] : []),
    `URL:${siteConfig.url}`,
    `URL;TYPE=LinkedIn:${siteConfig.secondaryCta.href}`,
    'ADR;TYPE=WORK:;;;Toronto;Ontario;;Canada',
    `NOTE:${escapeVcardText(siteConfig.description)}`,
    'END:VCARD',
  ];

  return `${lines.join(CRLF)}${CRLF}`;
}

export function getVcardFilename() {
  return `${siteConfig.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.vcf`;
}
