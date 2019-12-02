class AuctionSerializer < ActiveModel::Serializer

  attributes(
    :id,
    :title,
    :body,
    :created_at,
    :ends_at,
    :reserve_price
    )

    belongs_to(:user, key: :author)
    has_many(:bids)

    class BidSerializer < ActiveModel::Serializer
      attributes :id, :price, :created_at

      belongs_to :user, key: :author
    end
end
