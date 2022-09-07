Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :destroy]
  resources :cart_items, only: [:show]
  resources :carts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

# post '/login', to: 'sessions#login'
# get '/authorized_user', to: 'users#show
# delete '/logout', to: 'sessions#destroy
end
