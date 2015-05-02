class User < ActiveRecord::Base
  # refers to DJ
  has_one :room, :foreign_key => :dj_id
  belongs_to :room 

  has_many :likes

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook, :soundcloud]

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email if user.email.empty?
      user.password = Devise.friendly_token[0,20] if user.email.empty?
      # user.name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image

      # Set SoundCloud if SoundCloud
      soundcloud_auth(auth) if auth.provider == 'soundcloud'
    end
  end

  def soundcloud_auth(auth)
    self.soundcloudtoken = auth.credentials.token
  end

end

