class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :cart_id
      t.integer :item_id
      # add column item name :item_type

      t.timestamps
    end
  end
end
