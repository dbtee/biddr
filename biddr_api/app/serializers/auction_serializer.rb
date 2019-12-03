class AuctionSerializer < ActiveModel::Serializer

  attributes(
    :id,
    :title,
    :body,
    :created_at,
    :ends_at,
    :reserve_price,
    :bids,
    :user
    )

    belongs_to :user
    has_many :bids

    class BidSerializer < ActiveModel::Serializer
      attributes :id, :user_id, :price, :created_at, :user

      belongs_to :user
      belongs_to :auction
    end
end
