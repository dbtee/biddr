class AuctionCollectionSerializer < ActiveModel::Serializer
  
  attributes(
    :id,
    :title,
    :body,
    :created_at,
    :ends_at,
    :reserve_price
    )
end
