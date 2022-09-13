class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show

        if current_user
            render json: current_user, status: :ok
        
        else
            render json: {"error": "User not found", status: :not_found}
        end
    end

    def create
        new_user = User.create(user_new_params)
        if new_user.valid?
            session[:logged_user] = user.id
            render json: new_user
        else  
            render json: {"error": new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    def update
        user_to_update = User.find_by(id:params[:id])

        if user_to_update.update(user_update_params)
            render json: user_to_update
        else  
            render json: {"error": new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    

    def destroy
        user_to_delete = User.find_by(id:params[:id])
        if user_to_delete
            user_to_delete.carts.each do |each_cart|
                each_cart.cart_items.destroy_all
                each_cart.destroy
            end

            user_to_delete.destroy
            head :no_content
        else  
            render json: {"errors": "User does not exisit"}, status: :not_found
        end
    end

    private
    def user_new_params
        params.require(:user).permit(:name, :email, :password)
    end

    def user_update_params
        params.require(:user).permit(:name, :email, :password)
    end


end
