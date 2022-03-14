import consumer from './consumer';

consumer.subscriptions.create('RoomChannel', {
  connected() {
    // Called when the subscription is ready for use on the server
    this.speak('Hi there ndoda');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    alert(data['message']);
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function (message) {
    return this.perform('speak', { message: message });
  },
});
