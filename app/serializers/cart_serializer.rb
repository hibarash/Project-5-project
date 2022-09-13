class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  # has_many :cart_items
  has_many :items
end
