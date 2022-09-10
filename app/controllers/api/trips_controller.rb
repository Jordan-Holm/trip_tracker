class Api::TripController < ApplicationController
  before_action :set_trip, only: [:show, :update, :destroy]
  
  def index
    render json: Trip.all
  end

  def show
    @trip = trip_name.find(params[:id])
    render json: @trip_name
  end

  def create 
    @trip = Trip.new(trip_params)
    if @trip.save
      render json: @trip
    else 
      render json: { errors: @trip.errors }, status: :unprocessable_entity 
    end
  end

  def update 
    @trip = trip.find(params[:id])
    if @trip.update(trip_params)
      render json: @trip_name
    else
      render json: { errors: @trip_name.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @trip = Trip_name.find(params[:id])
    @trip_name.destroy
    render json: { message: 'Trip deleted' }
    or
    Trip.find(params[:id]).destroy
    render json: { message: 'Trip deleted' }
  end

  private 
    def trip_params
      params.require(:trip).permit(:name, :days)
    end
    def set_parent
      @User = User.find(params[:parent_id])
    end

    def set_trip
      @trip = Trip.find(params[:id])
    end
  end