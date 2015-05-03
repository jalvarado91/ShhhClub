require 'pusher'

Pusher.app_id = ENV['pusher_app_id']
Pusher.key = ENV['pusher_key']
Pusher.secret = ENV['pusher_secret']

Pusher.url = "http://ab3c98158c6fe5aeb9cd:e8e70748d47475f9b50d@api.pusherapp.com/apps/61730"
Pusher.logger = Rails.logger