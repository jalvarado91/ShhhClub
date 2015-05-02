class RoomsController < ApplicationController
  
  def index
  	@rooms = Room.all
  	render :json => @rooms
  end
   
  def show
  	@room = Room.find(params[:id])
  	render :json => @room
  end

  def new
  	@room = Room.new
  end

  def create
  	@room = Room.new room_params
  	@room.dj = current_user
  	if @room.save!
  		render :json => @room 
  	end
  end
	 
  def edit
  	@room = Room.find(params[:id])
  end

  def update
  	@room = Room.find(params[:id])
  	@room.update room_params
  	if @room.save
  	render :json => @room 
 	end
  end

  def destroy
  	@room = Room.find(params[:id])
  	@room.destroy
  end
 
 private
  def room_params
    params.require(:room).permit(:title, :description, :private, :youtube_url)
  end
end
