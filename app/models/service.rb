class Service < ApplicationRecord
  belongs_to:worker
  has_many:comments
end
