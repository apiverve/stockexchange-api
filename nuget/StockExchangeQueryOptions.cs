using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.StockExchange
{
    /// <summary>
    /// Query options for the Stock Exchange API
    /// </summary>
    public class StockExchangeQueryOptions
    {
        /// <summary>
        /// The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ)
        /// </summary>
        [JsonProperty("mic")]
        public string Mic { get; set; }
    }
}
