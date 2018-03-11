//const WebSocket = require('isomorphic-ws');
//import { WebSocket } from 'ws';
import WebSockett = require("isomorphic-ws");
// function onMessage(message) {
//     console.log('received: ' + message);
// }

// ws.send('yo');
// ws.onopen = (event) => {
//     console.log("event!: " + event);
//     // ws.on('message', onMessage);
//     // ws.send('something');
// };

export class Hub {
    ws: WebSocket;

    constructor(url: string) {
        this.ws = new WebSockett(url);
        this.ws.onopen = this.onOpen
        this.ws.onclose = this.onClose
        this.ws.onerror = this.onError
        this.ws.onmessage = this.onOpen

        // this.ws.on('open', this.onOpen)
        // this.ws.on('close', this.onClose)
        // this.ws.on('error', this.onError)
        // this.ws.on('message', this.onMessage)
    }

    onOpen() {
        console.log("Opened!");
    }

    onClose(event: CloseEvent) {
        console.log("Closed: " + event.reason);
    }

    onError(event: Event) {
        console.log("Error: " + event.returnValue);
    }

    onMessage(event: MessageEvent) {
        console.log("Message: " + event.data);
    }

    send(data: any) {
        console.log("Sending: " + data);
        this.ws.send(data);
        //this.ws.send(data, this.onSendError);
    }

    // onSendError(error: Error) {
    //     console.log("Send Error: " + error);
    // }
}