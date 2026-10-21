# Stock Exchange API - Ruby Gem

Stock Exchange identifies trading venues worldwide by Market Identifier Code, name, or country. It provides official exchange names, acronyms, host cities, websites, and founding dates, while paid plans add regulatory MIC and LEI identifiers.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_stockexchange'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_stockexchange
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_stockexchange'

# Initialize the client
client = APIVerve::Stockexchange::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ mic: "XNYS" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ mic: "XNYS" })
  puts response["data"]
rescue APIVerve::Stockexchange::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Stockexchange::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Stockexchange::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "count": 1,
    "exchanges": [
      {
        "mic": "XNYS",
        "operatingMic": "XNYS",
        "type": "OPRT",
        "name": "NEW YORK STOCK EXCHANGE, INC.",
        "acronym": "NYSE",
        "category": "RMKT",
        "country": "US",
        "city": "NEW YORK",
        "website": "WWW.NYSE.COM",
        "lei": "549300HIIRNWMO0MKS45",
        "creationDate": "2005-05-23"
      }
    ]
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/stockexchange?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/stockexchange?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/stockexchange?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
