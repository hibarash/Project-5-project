require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# user
# t.string :name
#t.string :username
#t.string :email
# t.string :password

# :password_digest

# when making models: go from most independent to dependent 

# user -< orders >- joiners 
# user -< joiner -< items

CartItem.destroy_all
Item.destroy_all
Cart.destroy_all
User.destroy_all

puts "🌱 Seeding spices..."

puts "Creating Users..."
u1 = User.create(name: "Hiba", email: "hiba@gmail.com", password: "123")
u2 = User.create(name: "Mia", email: "Mia@gmail.com", password: "123")
u3 = User.create(name: "Rouza", email: "Rouza@gmail.com", password: "123")

puts "Creating Carts..."
cart1 = Cart.create(name: "Hiba", user_id: u1.id)
cart2 = Cart.create(name: "Mia", user_id: u2.id)
cart3 = Cart.create(name: u3.name, user_id: u3.id)


puts "Creating Items..."
item1 = Item.create(clothing_type: "shirt", price: rand(1..5))
item2 = Item.create(clothing_type: "jeans", price: rand(1..5))
item3 = Item.create(clothing_type: "blouse", price: rand(1..5))

puts "Creating Carts/Items..."
cart_item_1 = CartItem.create(cart_id: cart1.id, item_id: item1.id)
cart_item_2 = CartItem.create(cart_id: cart2.id, item_id: item2.id)
cart_item_3 = CartItem.create(cart_id: cart3.id, item_id: item3.id)

