class ChangeLocationColumnToRoomsTable < ActiveRecord::Migration
  def change
  	add_column :rooms, :lat, :decimal, {:precision=>10, :scale=>6}
	add_column :rooms, :lng, :decimal, {:precision=>10, :scale=>6}
	remove_column :rooms, :location 
  end
end
