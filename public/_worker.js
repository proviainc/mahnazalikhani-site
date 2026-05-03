/**
 * Cloudflare Pages advanced mode: runs on every request before static assets.
 * Static export disables Next.js middleware; this keeps www → apex at the edge.
 *
 * @see https://developers.cloudflare.com/pages/functions/advanced-mode/
 */
export default {
  /**
   * @param {Request} request
   * @param {{ ASSETS: { fetch: typeof fetch } }} env
   */
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.toLowerCase() === 'www.mahnazalikhani.com') {
      url.hostname = 'mahnazalikhani.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
