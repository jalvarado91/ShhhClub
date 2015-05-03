class Soundcloudapi


  @client = Soundcloud.new(:client_id => '25cc17a15dbfaef9d51ce58a2bb45ae5')

  def self.track(trackid)
    @track = @client.get('/tracks/' + trackid.to_s )
  end

end