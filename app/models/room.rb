class Room < ActiveRecord::Base
	belongs_to :dj, class_name: "User"
	has_many :guests, class_name: "User"
end
