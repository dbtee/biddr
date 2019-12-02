Bid.destroy_all
Auction.destroy_all
User.destroy_all


super_user = User.create(
  first_name: "a",
  last_name: "a",
  email: "a@a.a",
  password: 'a'
)

10.times do
    first_name =  Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
      first_name: first_name,
      last_name: last_name,
      email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
      password: 'a'
    )
  end
  users = User.all
  

5.times do
    created_at = Faker::Date.backward(days: 365)
    a = Auction.create(
        title: Faker::Hacker.say_something_smart,
        body: Faker::ChuckNorris.fact,
        ends_at: Faker::Date.forward(days: 20),
        reserve_price: rand(0..10),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    if a.valid?
        a.bids = rand(0..15).times.map do
            Bid.new(
              price: rand(1..250),
              user: users.sample
            )
          end
        end
end
