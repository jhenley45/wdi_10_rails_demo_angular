class ProductsController < ApplicationController
	respond_to :json

  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end


  def create

    # Create and save new post from data received from the client
    new_product = Product.new
    new_product.name = params[:new_product][:title][0...250] # Get only first 250 characters
    new_product.description = params[:new_product][:contents]

    # Confirm post is valid and save or return HTTP error
    if new_product.valid?
      new_product.save!
    else
      render "public/422", :status => 422
      return
    end

    # Respond with newly created post in json format
    respond_with(new_product) do |format|
      format.json { render :json => new_product.as_json }
    end

  end
end
