import consumer from './consumer';

consumer.subscriptions.create('RoomChannel', {
  connected() {
    // Called when the subscription is ready for use on the server

    let roomSpeaker = document.querySelector('[data-behaviour~=room_speaker]');
    if (roomSpeaker)
      roomSpeaker.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
          this.speak(event.target.value);
          event.target.value = '';
          event.preventDefault();
        }
      });
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var div = document.createElement('div');
    div.innerHTML += data;
    document.getElementById('messages').appendChild(div);
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function (message) {
    return this.perform('speak', { message: message });
  },
});
