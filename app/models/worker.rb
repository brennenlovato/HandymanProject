class Worker < ApplicationRecord
  has_many :services, dependent: :destroy
  validates :first_name, :last_name, presence: true
end
