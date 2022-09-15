class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized_user
    before_action :current_user
    
    

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


def current_user
   
    User.find_by(id: session[:logged_user])

end

def authorized_user

    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
end


# private

# def render_invalid(i)
#     render json: {errors: i.record.errors.full_messages },status: :unprocessable_entity
# end

# def render_not_found(e)
#     render json: {error: "#{e.model} Not Found"}, status: :not_found
# end

end
# rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

# def current_user
#     User.find_by(id:session[:current_user])
# end

# def authorized_user
#     return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
# end


# rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
# rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
# include ActionController::Cookies

# include ActionController::Cookies
# # class ApplicationController < ActionController::Base
# #     protect_from_forgery with: :null_session
# # end

# skip_before_action :verify_authenticity_token


# private

# def render_invalid(i)
#     render json: {errors: i.record.errors.full_messages },status: :unprocessable_entity
# end

# def render_not_found(e)
#     render json: {error: "#{e.model} Not Found"}, status: :not_found
# end