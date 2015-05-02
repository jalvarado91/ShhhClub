class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :title
      t.string :description
      t.boolean :private
      t.string :youtube_url
      t.timestamps null: false
    end
  end
end
