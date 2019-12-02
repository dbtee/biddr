class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_auction, only: [:show, :destroy]

  def index
    auctions = Auction.order(created_at: :desc)
    render(json: auctions, each_serializer: AuctionCollectionSerializer)
  end

  def create
    auction = Auction.new auction_params
    auction.user = current_user
    auction.save!
    render json: { id: auction.id }
  end

  def show
    if @auction
      render(
        json: @auction,

        include: [ :author, {bid: [ :author ]} ]
      )
      else
        render(json: {error: 'Auction Not found'})
      end

  end

  def destroy
    @auction.destroy
    render(json: { status: 200 }, status: 200)
  end

  private

  def find_auction
    @auction ||= Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :body, :ends_at, :reserve_price)
  end

end
