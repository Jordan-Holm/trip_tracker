class Api::LocationsController < ApplicationController
    before_action :set_parent
    
    def index
        render json: @trip.location.all
      end

      def show
        @location = @trip.location.find(params[:id])
        render json: @location
      end

      def create
        @location = @trip.location.new(location_params)
        if @location.save
          render json: @location
        else
          render json: { errors: @location.errors }, status: :unprocessable_entity
        end
      end

      def update
        @location = @trip.location.find(params[:id])
        if @location.update(location_params)
          render json: @location
        else
          render json: { errors: @location.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        @location = @trip.location.find(params[:id])
        @location.destroy
        render json: { message: 'model_name deleted' }

      private
        def location_params
        params.require(:location).permit(:name, whereabouts)

        def set_parent
            @trip = Trip.find(params[:trip_id])
        end
    end
end
