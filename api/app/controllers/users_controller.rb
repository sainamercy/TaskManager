class UsersController < ApplicationController

    def register
        user = User.create(user_params)
        if user.valid?
            app_response(message: "registration was successfull", data: user, status: :created)
        else 
            app_response(message: "something went wrong during registration", status: :unprocessable_entity, data:user.errors)
        end
    end
    
private

    def user_params
        params.permit(:username, :email, :password)
    end

end
