class Location < ApplicationRecord
  belongs_to :trip
  has_many :addresses, dependent: :destroy
  validates :name, :whereabouts, presence: true
  
end
