source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'


# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem "autoprefixer-rails"

### Libraries

gem 'react-rails' # JSX Support
gem 'tzinfo-data', platforms: [:mingw, :mswin] # Rails Core Windows Dependency, Provides Time Zone Info
gem 'thin' # Use thin instead of webrick

gem 'normalize-rails'
gem 'susy'
gem 'breakpoint'


gem 'devise' # Devise our users
gem 'omniauth-facebook'
gem 'omniauth-soundcloud'
gem 'soundcloud'
gem 'pusher'
gem 'autoprefixer-rails'
gem 'figaro' # Env Files



group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :development do
  gem 'awesome_print'
  gem 'better_errors' # Better Errors
  gem 'binding_of_caller' # Better Debugging
  gem 'quiet_assets' # Shhh.. we don't need to see the assets
  gem 'pry-byebug'
end

group :production do
  gem 'pg' # Postgresql DB
  gem 'rails_12factor' # Heroku asset handler
end