class CartsController < ApplicationController
    def index
        render json: Cart.all
    end
    
    def show
        carts = Cart.find_by(id: params[:id])
        if carts 
            render json: carts
        else  
            render json: {"error": "Item Not Found", status: :not_found}
        end
    end

    def create 
        new_cart = Cart.new(create_cart_params)
        if new_cart
            render json: create_cart_params
        else
            render json: {"errors": create_cart_params.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update 
        update_cart = Cart.find_by(id:params[:id])
        if update_cart.update(update_cart_params)
            render json: update_cart, status: :accepted
        else  
            render json: {"errors": " Cart not found"}, status: :not_found
        end
    end

    def destroy
        cart_to_delete = Cart.find_by(id:params[:id])
        if cart_to_delete
            cart_to_delete.users.destroy_all
            cart_to_delete.items.destroy_all
            #cart_to_delete.cart_items.destroy_all
            head :no_content
        else  
            render json:{"errors": "Cart does not exist"}, status: :not_found
        end
    end

    private 
    def create_cart_params
        params.require(:cart).permit(:name, :user_id) # do i need user id??
    end
    def update_cart_params
        params.require(:cart).permit(:name, :user_id) # do i need user id??
    end
end
