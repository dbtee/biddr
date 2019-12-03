class Api::V1::BidsController < Api::ApplicationController

  before_action :authenticate_user!


  def create
    # byebug
    @auction = Auction.find(params[:auction_id])
    @bid = Bid.new bid_params
    @bid.auction_id = @auction.id
    @bid.user = current_user
    if @bid.save
      render json: { id: @bid }
    else
      @bid = @auction.bid.order(created_at: :desc)
      render json: { message: "ya dun goofed"}
  end
end

private

  def bid_params
    params.require(:bid).permit(:price)
  end

end
