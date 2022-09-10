class Api::LocationsController < ApplicationController
    def index
        render json: Location.all
      end

      def show
        @location = Location.find(params[:id])
        render json: @location
      end

      def create
        @location = Location.new(location_params)
        if @location.save
          render json: @location
        else
          render json: { errors: @location.errors }, status: :unprocessable_entity
        end
      end

      def update
        @location = Location.find(params[:id])
        if @location.update(location_params)
          render json: @location
        else
          render json: { errors: @location.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        @location = Location.find(params[:id])
        @location.destroy
        render json: { message: 'model_name deleted' }

      private
        def location_params
        params.require(:location).permit(:name, whereabouts)
  end

    












    end
