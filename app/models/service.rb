class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependend: :destroy
  validates :name, :type, :location, presence: true
end
