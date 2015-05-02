class DropJoinUsersRoomsTable < ActiveRecord::Migration
  def up
    drop_table :rooms_users
  end

  def down
    # recreate table logic here
  end

end
