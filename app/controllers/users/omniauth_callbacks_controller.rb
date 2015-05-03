class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController

  before_action :set_data

  def facebook
    @user = User.from_omniauth(@data)

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def soundcloud
    if current_user.present?
      current_user.soundcloud_auth(@data)
    else
      @user = User.from_omniauth(@data)

      if @user.persisted?
        sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
        set_flash_message(:notice, :success, :kind => "SoundCloud") if is_navigational_format?
      else
        session["devise.soundcloud_data"] = request.env["omniauth.auth"]
        redirect_to new_user_registration_url
      end
    end
  end

  def set_data
    @data = request.env["omniauth.auth"]
  end

end