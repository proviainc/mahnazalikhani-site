import { siteConfig } from '../site.config';

function absoluteSiteUrl(pathname: string) {
  return new URL(pathname, siteConfig.url).toString();
}

export function getCardPagePath() {
  return '/card/';
}

export function getShortCardEntryPath() {
  return '/c/';
}

export function getCardPageUrl() {
  return absoluteSiteUrl(getCardPagePath());
}

export function getShortCardEntryUrl() {
  return absoluteSiteUrl(getShortCardEntryPath());
}
