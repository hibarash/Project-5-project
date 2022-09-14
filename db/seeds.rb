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
item2 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDg35NEb76y5fGx-1ls54NUI10mgIHxXNCQ&usqp=CAU")
item3 = Item.create(clothing_type: "tops", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWQgFIcpwljQI0BFAHpFdZtY5PMi2qpK90Q&usqp=CAU")
item4 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmO8xi9rhEf63iZu8xxmXVZERU8jInUgSig&usqp=CAU")
item5 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLVn7wgd5pR3VIepzhtNOtfoXlaj_So-CMw&usqp=CAU")
item6 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa-1QHcntR0N_HIC94NMRn-uxL8Wn6gaqgc03zrq_Z6GGs734EdUJaWgDbMf7wfKu4qg&usqp=CAU")
item7 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyIX-0vq8NsUKRh-kXE97vG4Dq6NCm7_kQA&usqp=CAU")
item8 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jiVF31mLldfnbrG8fkr3Y4TryTMiUjSeHQ&usqp=CAU")
item9 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxvDE7W_kwd39RCjevagjEqjxZTdyWIKVhA&usqp=CAU")
item10 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9mN138S1z6J2Z0zeK6UB9SBMv7gQE7L7MQA&usqp=CAU")
item11 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqib239Sxi92bg8qg_4ApkHOGdEfYiusmWA&usqp=CAU")
item12 = Item.create(clothing_type: "top", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYRRvzH9OV_5IclkmpsCgG7LvT5M3CzNmPw&usqp=CAU")
item13 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauiyVtyy7fxmAi-oL92QWpq9mRD3-HFNCR2Rlh5En50Fp03N5WSat3r0XMhVEp04-lN0&usqp=CAU")
item14 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyIX-0vq8NsUKRh-kXE97vG4Dq6NCm7_kQA&usqp=CAU")
item15 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XXq2cUqFpmCsfdPI8mMUBaLJP84iUL-SCA&usqp=CAU")
item16 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AlVe-CR2Lg4uHnajHBZvbFAwN4hF5FZTHw&usqp=CAU")
item17 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUm5gHBRWUcDxLsxEEqlRjje8v8GVgWJeSUQ&usqp=CAU")
item18 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3GtDH-6pdNTO89obDiZ3cREexWTagaEiLA&usqp=CAU")
item19 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRursT3ahikJV51B-5oF3YjBuwJPtIW6z848g&usqp=CAU")
item20 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7e-o9EG18LW0qJ5DAiZTbqqZAEgdQA5mQQ&usqp=CAU")
item21 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_T9kqlicjNCqKc5isiWKa7zJyuUXRuMdYg&usqp=CAU")
item22 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EDdAo5NoBmMp_aRbpyzxNnOXtpqwx322AA&usqp=CAU")
item23 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoNfIU5ZG3w44otB27QK5hq0HwgvuK57g7A&usqp=CAU")
item24 = Item.create(clothing_type: "shoes", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWu1qF_k72gCmyNI1fVmKV-ioX6grZ9kuEtQ&usqp=CAU")
item25 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUczdfpaVqg0Eg--Kkis39djT8V_mywhrtQ&usqp=CAU")
item26 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSnnjsLk7wzimChydokhkcwQwu7meNlnwB_PQZrrIa9LSgxcFwaA5sXyh5mmfFV9010w&usqp=CAU")
item27 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS183Ur2kgncxnIYQ1uShlv0Eu0_9HsK9rFFA&usqp=CAU")
item28 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3X404wYdxZ8yvIBXYgXTw39BTBJEVOsiXw&usqp=CAU")
item29 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JOobaJqIK9owNy7SzY5RmS2zMrThYvcn2w&usqp=CAU")
item30 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlVefpCIDUdq06hLEv5l8QuZTnYBi_s4yZQ&usqp=CAU")
item31 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIH0JPWEt-7lBk_ktZfG_FAbviMaZo25TIA&usqp=CAU")
item32 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQce-C5hXXRAPU818fIQPIKSG1wPMioHIYj5Q&usqp=CAU")
item33 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhEbzCEbW5ppeg62VB7eMUzGQDytknwVyfw&usqp=CAU")
item34 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRtNyjC5HRJQW785214N1L4FWQLancezKNA&usqp=CAU")
item35 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Xcd3hYYUA1s8mHb7wv9nYXqBRpUsqSiEwQ&usqp=CAU")
item36 = Item.create(clothing_type: "bottoms", price: rand(1..5), image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhhq6Kj4xlI8tHfZyDXp4__K6Qd9xDY21Cw&usqp=CAU")


puts "Creating Carts/Items..."
cart_item_1 = CartItem.create(cart_id: cart1.id, item_id: item1.id, image_url: item1.image)
cart_item_2 = CartItem.create(cart_id: cart2.id, item_id: item2.id, image_url: item2.image)
cart_item_3 = CartItem.create(cart_id: cart3.id, item_id: item3.id, image_url: item3.image)
cart_item_4 = CartItem.create(cart_id: cart4.id, item_id: item4.id, image_url: item4.image)
cart_item_5 = CartItem.create(cart_id: cart5.id, item_id: item5.id, image_url: item5.image)


# come back and add items 4 , 5
