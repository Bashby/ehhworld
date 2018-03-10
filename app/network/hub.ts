import { WebSocketClient } from 'uws';

var wsClient = new WebSocketClient('ws://localhost:');
 
function onMessage(message) {
    console.log('received: ' + message);
}
 
wsClient.on('connection', function(ws) {
    ws.on('message', onMessage);
    ws.send('something');
});