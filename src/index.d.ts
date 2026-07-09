/**
 * inngest-sdk TypeScript declarations
 */
export interface InngestOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Inngest {
  constructor(options?: InngestOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Inngest;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
