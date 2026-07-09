/**
 * inngest-sdk · sovereign wrapper for Inngest
 * Queue/Workflow
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://www.inngest.com/docs
 * Homepage: https://inngest.com
 */

export class Inngest {
  constructor({ apiKey, baseURL = 'https://inngest.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://www.inngest.com/docs. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('inngest ' + res.status);
    return res.json();
  }
}

export default Inngest;

// Metadata
export const meta = {
  "name": "Inngest",
  "category": "Queue/Workflow",
  "homepage": "https://inngest.com",
  "docs_url": "https://www.inngest.com/docs",
  "endpoints_count": 0
};
