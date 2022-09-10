class Address < ApplicationRecord
  belongs_to :location

  validates :street, :city, :state, :zip, presence: true
end
