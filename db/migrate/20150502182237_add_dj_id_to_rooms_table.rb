class AddDjIdToRoomsTable < ActiveRecord::Migration
  def change
  	add_column :rooms, :dj_id, :integer
  end
end
