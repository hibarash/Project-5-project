class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :formatted_cart_items
  # has_many :cart_items
  has_many :items

  def formatted_cart_items
    # return ":)"
    return self.object.cart_items.map do |each_cart_item|
        {
          id_to_delete: each_cart_item.id,
          item_in_cart_to_delete: each_cart_item.item
        }
    end
  end
  
end
