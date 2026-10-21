# Stock Exchange API - PHP Package

Stock Exchange identifies trading venues worldwide by Market Identifier Code, name, or country. It provides official exchange names, acronyms, host cities, websites, and founding dates, while paid plans add regulatory MIC and LEI identifiers.

## Installation

Install via Composer:

```bash
composer require apiverve/stockexchange
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Stockexchange\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['mic' => 'XNYS']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Stockexchange\Client;
use APIVerve\Stockexchange\Exceptions\APIException;
use APIVerve\Stockexchange\Exceptions\ValidationException;

try {
    $response = $client->execute(['mic' => 'XNYS']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/stockexchange?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/stockexchange?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/stockexchange?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
