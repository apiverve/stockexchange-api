declare module '@apiverve/stockexchange' {
  export interface stockexchangeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface stockexchangeResponse {
    status: string;
    error: string | null;
    data: StockExchangeData;
    code?: number;
  }


  interface StockExchangeData {
      mic:          string;
      operatingMic: string;
      type:         string;
      name:         string;
      acronym:      string;
      category:     string;
      country:      string;
      city:         string;
      website:      string;
      lei:          string;
      creationDate: Date;
  }

  export default class stockexchangeWrapper {
    constructor(options: stockexchangeOptions);

    execute(callback: (error: any, data: stockexchangeResponse | null) => void): Promise<stockexchangeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: stockexchangeResponse | null) => void): Promise<stockexchangeResponse>;
    execute(query?: Record<string, any>): Promise<stockexchangeResponse>;
  }
}
