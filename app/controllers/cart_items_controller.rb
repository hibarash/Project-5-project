class CartItemsController < ApplicationController
    # def show
    #     cart_item = CartItem.find_by(id:params[:id]) ## how do i search for this
    #     if cart_item
    #         render json: cart_item
    #     else   
    #         render json: {"error": "User not found"}, status: :not_found
    #     end
    # end

    # need post and delete
    # def update
    #     update_cart_item = CartItem.find_by(id:params[:id])
    #     if update.update_cart_item.update(cart_item_params)
    #         render json: update_cart_item, status: :accepted
    #     else
    #         render json: {"errors": " Cart Item not found"}, status: :not_found

    #     end
    # end
    # def create

    # end
    # def index
    #     render json: CartItem.all

    # end

    def destroy 
        cart_item_delete = CartItem.find_by(id:params[:id])
            if cart_item_delete
                cart_item_delete.items.each do |each_item|
                    cart_items.each_item.destroy
                end
                head :no_content
            else render json: {"error": cart_item_delete.errors.full_messages}, status: :not_found
            
                # come back to this 
                cart_item.destroy
            end
    end

    private
    def update_cart_params
        params.require(:cart_item).permit(:cart_id, :item_id)
    end
end
# user_to_delete = User.find_by(id:params[:id])
#         if user_to_delete
#             user_to_delete.carts.each do |each_cart|
#                 each_cart.cart_items.destroy_all
#                 each_cart.destroy
