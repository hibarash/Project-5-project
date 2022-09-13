class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login]
    
    def login
        
        user = User.find_by(email: params[:email])
        
        if user&.authenticate(params[:password])
            session[:logged_user] = user.id # from authorization lecture
            render json: user, status: :ok
        else
            
            render json: {error: "Invalid Password or Username"}, status: :unauthorized
            
        end #watch authentication lecture 45 mins

    end

    def destroy
        session.delete :logged_user
    end
end

# before_filter :login_required, :except=>[:new, :create]
    # skip_before_filter :login_required, only: [:new, :create]
