class RoomsController < ApplicationController
  def index
  end
   
  def show
  end

  def new
  	@room = current_user.Room.new
  end

  def create
  end
	 
  def edit
  end

  def update
  end

  def destroy
  end

end
