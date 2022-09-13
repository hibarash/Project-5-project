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
u4 = User.create(name: "Nora", email: "nora@gmail.com", password: "123")
u5 = User.create(name: "dalia", email: "dalia@gmail.com", password: "123")

puts "Creating Carts..."
cart1 = Cart.create(name: "Hiba", user_id: u1.id)
cart2 = Cart.create(name: "Mia", user_id: u2.id)
cart3 = Cart.create(name: u3.name, user_id: u3.id)
cart4 = Cart.create(name: u4.name, user_id: u4.id)
cart5 = Cart.create(name: u5.name, user_id: u5.id)



puts "Creating Items..."
item1 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Phl8EMPwGbnFr4D7yIgqkSB05rTbXbgusg&usqp=CAU")
item2 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDg35NEb76y5fGx-1ls54NUI10mgIHxXNCQ&usqp=CAU")
item3 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWQgFIcpwljQI0BFAHpFdZtY5PMi2qpK90Q&usqp=CAU")
item4 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmO8xi9rhEf63iZu8xxmXVZERU8jInUgSig&usqp=CAU")
item5 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLVn7wgd5pR3VIepzhtNOtfoXlaj_So-CMw&usqp=CAU")

puts "Creating Carts/Items..."
cart_item_1 = CartItem.create(cart_id: cart1.id, item_id: item1.id, image_url: item1.image)
cart_item_2 = CartItem.create(cart_id: cart2.id, item_id: item2.id, image_url: item2.image)
cart_item_3 = CartItem.create(cart_id: cart3.id, item_id: item3.id, image_url: item3.image)
cart_item_4 = CartItem.create(cart_id: cart4.id, item_id: item4.id, image_url: item4.image)
cart_item_5 = CartItem.create(cart_id: cart5.id, item_id: item5.id, image_url: item5.image)

# come back and add items 4 , 5
