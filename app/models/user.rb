class User < ApplicationRecord
    has_many :trips, dependent: :destroy
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
end
