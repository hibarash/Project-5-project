class ItemSerializer < ActiveModel::Serializer
  attributes :id, :clothing_type, :price, :image
end
