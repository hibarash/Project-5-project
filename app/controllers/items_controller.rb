class ItemsController < ApplicationController
    def index
        render json: Item.all
    end

    def show
        items = Item.find_by(id: params[:id])
        if items 
            render json: items
        else  
            render json: {"error": "Item Not Found", status: :not_found}
        end
    end

    def create
        item_to_add = User.new(item_create_params)
        if item_to_add.save
            render json: item_to_add
        else
            render json: {"errors": item_to_add.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def destroy
        if item_to_delete
            item_to_delete.item.destroy_all
            ### do i need anything else to delete

            head :no_content
        else  
            render json: {"errors": "Item does not exisit"}, status: :not_found
        end


    end

    private

    def item_create_params
        params.require(:item).permit(:clothing_type, :price)
    end
end
