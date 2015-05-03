class RoomsController < ApplicationController
  
  def index
    @tenrooms = Room.last(10)
    @room = Room.new
    if request.xhr?
      render :json => Room.all.to_json
    else

  	 @rooms = Room.all
      respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @rooms }
      end
    end
  end
   
  def show

  	@room = Room.last
   respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @room }
    end

  end

  def new
  	@room = Room.new

  respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @room }
    end
  end

  def create
  	@room = Room.new room_params
  	@room.dj = current_user
    if @room.save
      redirect_to @room
    end
  end
	 
  def edit
  	@room = Room.find(params[:id])
    respond_to do |format|
    format.html # index.html.erb
    format.json { render :json => @room }
    end
  end

  def update
  	@room = Room.find(params[:id])
  	@room.update room_params
  	if @room.save
    	 respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @room }
      end
  	end
  end

  def destroy
  	@room = Room.find(params[:id])
  	@room.destroy
   respond_to do |format|
    format.html # index.html.erb
    format.json { render :json => @room }
    end
  end
 
 private
  def room_params
    params.require(:room).permit(:title, :description, :private, :youtube_url, :lat, :lng)
  end
end
