import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import io from 'socket.io-client/dist/socket.io';
import authentication from 'feathers-authentication-client';

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
});

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(hooks)
  .configure(authentication({storage: localStorage}));

export default feathersClient;