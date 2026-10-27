Pod::Spec.new do |s|
  s.name             = 'APIVerveStockExchange'
  s.version          = '1.2.3'
  s.summary          = 'Stock Exchange identifies trading venues worldwide by Market Identifier Code, name, or country.'
  s.description      = <<-'DESC'
Stock Exchange identifies trading venues worldwide by Market Identifier Code, name, or country. It provides official exchange names, acronyms, host cities, websites, and founding dates, while paid plans add regulatory MIC and LEI identifiers.

This iOS/macOS SDK provides a convenient way to access the Stock Exchange from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/stockexchange?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/stockexchange-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveStockExchange/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
