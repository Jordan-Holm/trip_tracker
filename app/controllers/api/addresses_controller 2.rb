class Api::AddressesController < ApplicationController

    before_action :set_parent
    before_action :set_address, only: [:show, :update, :destroy]

    def index
        render json: @location.address.all
    end

    def show
        render json: @address
    end

    def create

        @address = @location.address.new(address_params)

        if @address.save
            render json: @address
        else
            render json: { errors: @address.errors }, status: :unprocessable_entity
        end

    end

    def update

        if @address.update(address_params)
            render json: @address
        else
            render json: { errors: @address.errors }, status: :unprocessable_entity
        end

    end

    def destroy

        @address.destroy
        render json: { message: "address deleted." }
    end

    private

        def address_params
            params.require(:address).permit(:street, :city, :state, :zip)
        end

        def set_parent
            @location - Location.find(params[:])
        end

        def set_address
            @address = @location.address.find(params[:id])
        end
end
