class AddEndDateAndReserveToAuctions < ActiveRecord::Migration[6.0]
  def change
    add_column :auctions, :ends_at, :date
    add_column :auctions, :reserve_price, :float

    add_reference :auctions, :user, foreign_key: true
    add_reference :bids, :user, foreign_key: true
  end
end
