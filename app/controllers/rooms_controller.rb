class RoomsController < ApplicationController
  
  def index
  	@rooms = Room.all
   respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @events }
    end
  end
   
  def show
    if request.xhr?
      render :json => Room.find(params[:id]).to_json
    else
    	@room = Room.find(params[:id])
      respond_to do |format|
        format.html # index.html.erb
        format.json { render :json => @events }
    end
  end

  end

  def new
  	@room = Room.new

  respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @events }
    end
  end

  def create
  	@room = Room.new room_params
  	@room.dj = current_user
    if @room.save
      respond_to do |format|
        format.html # index.html.erb
        format.json { render :json => @events }
      end
    end
  end
	 
  def edit
  	@room = Room.find(params[:id])
    respond_to do |format|
    format.html # index.html.erb
    format.json { render :json => @events }
    end
  end

  def update
  	@room = Room.find(params[:id])
  	@room.update room_params
  	if @room.save
    	 respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @events }
      end
  	end
  end

  def destroy
  	@room = Room.find(params[:id])
  	@room.destroy
   respond_to do |format|
    format.html # index.html.erb
    format.json { render :json => @events }
    end
  end
 
 private
  def room_params
    params.require(:room).permit(:title, :description, :private, :youtube_url)
  end
end
