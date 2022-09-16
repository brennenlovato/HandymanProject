class Api::ServicesController < ApplicationController
  def index
    render json: Model_name.all
  end

  def show
    @model_name = Model_name.find(params[:id])
    render json: @model_name
  end

  def create
    @model_name = Model_name.new(model_name_params)
    if @model_name.save
      render json: @model_name
    else
      render json: { errors: @model_name.errors }, status: :unprocessable_entity
    end
  end

  def update
    @model_name = Model_name.find(params[:id])
    if @model_name.update(model_name_params)
      render json: @model_name
    else
      render json: { errors: @model_name.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @model_name = Model_name.find(params[:id])
    @model_name.destroy
    render json: { message: 'model_name deleted' }
    or
    Model_name.find(params[:id]).destroy
    render json: { message: 'model_name deleted' }
  end
end
