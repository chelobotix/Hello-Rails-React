class MessagesController < ApplicationController
  def show
    message = Message.find(rand(1..5))
    render json: { data: message }
  end
end
