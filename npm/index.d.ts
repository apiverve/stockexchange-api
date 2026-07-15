declare module '@apiverve/stockexchange' {
  export interface stockexchangeOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface stockexchangeResponse {
    status: string;
    error: string | null;
    data: StockExchangeData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface StockExchangeData {
      count:     number | null;
      exchanges: Exchange[];
  }
  
  interface Exchange {
      mic:          null | string;
      operatingMic: null | string;
      type:         null | string;
      name:         null | string;
      acronym:      null | string;
      category:     null | string;
      country:      null | string;
      city:         null | string;
      website:      null | string;
      lei:          null | string;
      creationDate: Date | null;
  }

  export default class stockexchangeWrapper {
    constructor(options: stockexchangeOptions);

    execute(callback: (error: any, data: stockexchangeResponse | null) => void): Promise<stockexchangeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: stockexchangeResponse | null) => void): Promise<stockexchangeResponse>;
    execute(query?: Record<string, any>): Promise<stockexchangeResponse>;
  }
}
