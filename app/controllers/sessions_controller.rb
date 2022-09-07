class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login]
    def login
        user = User.find_by(name:params[:username])
        if user&.user.authenticate(params[:password])
            session[:current_user] = user.id # from authorization lecture
            render json: user, status: :ok
        else
            renderjsonL {error: "Invalid Password or Username"}
            status: :unprocessable entity
        end #watch authentication lecture 45 mins

    def destroy
        session.delete :current_user
    end
end
