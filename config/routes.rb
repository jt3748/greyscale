


Rails.application.routes.draw do
      root to: "users#index"

  get '/privacy', to: 'home#privacy'
  get '/terms', to: 'home#terms'
  post 'home/thank_you'

  # mailing thankyou page


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
