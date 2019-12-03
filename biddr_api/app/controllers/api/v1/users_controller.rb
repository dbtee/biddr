class Api::V1::UsersController < Api::ApplicationController
    before_action :authenticate_user!, except: [:create]

    def current
        render json:current_user
    end

    def create
        user=User.new
        if user.save
            session[:user_id] = user.user_id
            render json: {id: user.id}
        else
            render json: { errors: user.errors.full_messages }, status: 422
        end
    end

private

    def user_params
        params.requre(:user)
        .permit(
            :first_name,
            :last_name,
            :email,
            :password,
            :password_confirmation
        )
    end
end
