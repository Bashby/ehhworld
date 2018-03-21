import { MessageHandler } from './message';
import { protobuf as message } from './message.compiled';

export class Hub {
    ws: WebSocket;
    handler: MessageHandler;

    constructor(url: string) {
        // Bind handler ????????????
        //this.handler = new MessageHandler(this.send);

        // Create and bind to websocket
        this.ws = new WebSocket(url);
        this.ws.onopen = this.onOpen
        this.ws.onclose = this.onClose
        this.ws.onerror = this.onError
        this.ws.onmessage = this.onMessage
    }

    onOpen(event: Event) {
        // Create payload
        let inner = message.Move.create({direction: "hi"});
        let wrapper = message.Message.create({move: inner});
        let binary = message.Message.encode(wrapper).finish();

        // Pack Header
        let buffer = new ArrayBuffer(binary.length + 2);
        let dataView = new DataView(buffer);
        dataView.setUint16(0, binary.length, false) // pack header using big endian becuase FUCK YOU I LIKE IT

        // Pack Payload
        let payloadView = new Uint8Array(buffer, 2);
        payloadView.set(binary)

        // let payload = new Uint8Array(binary.length + 2);
        // let header = Uint16Array.from([payload.length]);
        // payload.set(header, 0);
        // payload.set(binary, 2);
        console.log(buffer);
        this.send(buffer);
    }

    onClose(event: CloseEvent) {
        console.log("Socket Closed: " + JSON.stringify(event));
    }

    onError(event: Event) {
        console.log("Socket Error: " + JSON.stringify(event));
    }

    onMessage(event: MessageEvent) {
        console.log("Message: " + JSON.stringify(event));
        this.handler.handle(event.data);
    }

    send(data: any) {
        if ( this.ws.OPEN ) {
            console.log("Sending: " + data);
            this.ws.send(data);
        }
    }
}