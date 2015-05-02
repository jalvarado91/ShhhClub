class AddSoundCloudTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :soundcloudtoken, :string
  end
end
