class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :clothing_type
      t.integer :price
      t.sting :image

      t.timestamps
    end
  end
end
