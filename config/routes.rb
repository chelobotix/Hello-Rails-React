Rails.application.routes.draw do
  root 'root#index'
  get 'messages/show', to: 'messages#show'
end
