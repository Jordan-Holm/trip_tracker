class Api::UsersController < ApplicationController

    before_action :set_user, only: [:show, :update, :destroy]

    def index
        render json: User.All
    end

    def show
        render json: @user
    end

    def create

        @user = User.new(user_params)
        if @user.save
            render json: @user
        else 
            render json: { errors: @user.errors }, status: :unprocessable_entity
        end

    end

    def update

        if @user.update(user_params)
            render json: @user
        else
            render json: { errors: @user.errors }, status: :unprocessable_entity
        end

    end

    def destroy

        @user.destroy
        render json: { message: " user: #{user.username}, was deleted"}
        
    end

    private
        def user_params
            params.require(:user).permit(:username, :email, :password)
        end

        def set_user
            @user = User.find(params[:id])
        end
end
