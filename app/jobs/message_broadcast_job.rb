class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast "room_channel", rendered_message(message)
  end

  private

  def rendered_message(message)
    ApplicationController.renderer.render(partial: "messages/message", locals: { message: message })
  end
end
