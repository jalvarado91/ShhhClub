class PusherController < ApplicationController
protect_from_forgery :except => :auth # stop rails CSRF protection for this action

  def auth
    if current_user
      response = Pusher[params[:channel_name]].authenticate(params[:socket_id], {
        user_id: current_user.id,
        user_info: {
          email: current_user.email
        }
      })

      render :text => params[:callback] + "(" + response.to_json + ")", :content_type => 'application/javascript'

    else
      render :text => "Forbidden", :status => '403'
    end
  end
end