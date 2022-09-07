class CartItemsController < ApplicationController
    def show
        cart_item = CartItem.find_by(id:params[:id]) ## how do i search for this
        if cart_item
            render json: cart_item
        else   
            render json: {"error": "User not found"}, status: :not_found
        end
    end
end
