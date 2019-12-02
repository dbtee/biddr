class Auction < ApplicationRecord

    belongs_to :user
    
    has_many(:bids, dependent: :destroy)

    validates(:title, presence: true, uniqueness: true)
    validates(
        :body,
        presence: {message: "must exist"},
        length: { minimum: 10 }
      )

end
