Rails.application.routes.draw do
  
  namespace :api do
    resources :workers do 
      resources :services
    end
    
    resources :services, except: [:index, :show, :create, :update, :destroy] do
      resources :comments 
    end

  end

end
