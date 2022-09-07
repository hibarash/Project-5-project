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
        new_user = User.new(user_new_params)
        if new_user.save
            render json: new_user
        else  
            render json: {"error": new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    def update
        user_to_update = User.find_by(id:params[:id])

        if user_to_update.update(user_update_params)
        else  
            render json: {"error": new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        user_to_delete - User.find_by(id:params[:id])
        if user_to_delete
            user_to_delete.carts.destroy_all
            # user_to_delete.cart_items.destroy_all
            # user_to_delete.items.destroy_all
            user_to_delete.destroy
        end
    end

    private
    def user_new_params
        params.require(:user).permit(:name, :password, :email)
    end

    def user_update_params
        params.require(:user).permit(:name, :email, :password)
    end
end
