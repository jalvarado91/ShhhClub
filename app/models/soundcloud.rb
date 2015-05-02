class Soundcloud
  require 'soundcloud'

  client = SoundCloud.new(:client_id => '25cc17a15dbfaef9d51ce58a2bb45ae5')

  # get 10 hottest tracks
  tracks = client.get('/tracks', :limit => 10, :order => 'hotness')
# print each link
  tracks.each do |track|
    puts track.permalink_url
  end
end

