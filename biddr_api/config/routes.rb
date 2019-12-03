Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'user/current'
    end
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:create, :destroy]
      end
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do 
        get :current, on: :collection
      end
    end
  end

end
