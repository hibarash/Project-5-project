Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :destroy]
  resources :cart_items, only: [:index, :show, :create, :destroy]
  resources :carts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :update,]
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

post '/login', to: 'sessions#login'
get '/authorized_user', to: 'users#show'
delete '/logout', to: 'sessions#destroy'
# delete '/cart_items', to: "cart_items#delete"
# post '/cart_items', to "cart_items#create"
get "/current", to: "users#show"
post "/signup", to: "users#create"


# get "/cart_items",

end
