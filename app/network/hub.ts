
// Local Imports
import { Queue } from "../game/util";
import { MessageHandler } from "./message";
import { protobuf as message } from "./message.compiled";

export class Hub {
    public ws: WebSocket;
    public handler: MessageHandler;
    public queue: Queue;

    constructor() {
        // this.handler = new MessageHandler();
    }

    public connect(url: string) {
        // Create and bind to websocket
        this.ws = new WebSocket(url);
        this.ws.onopen = this.onOpen;
        this.ws.onclose = this.onClose;
        this.ws.onerror = this.onError;
        this.ws.onmessage = this.onMessage;
    }

    public onOpen(event: Event) {
        // Create payload
        const inner = message.Move.create({direction: "hi"});
        const wrapper = message.Message.create({move: inner});
        const binary = message.Message.encode(wrapper).finish();

        // Pack Header
        const buffer = new ArrayBuffer(binary.length + 2);
        const dataView = new DataView(buffer);
        dataView.setUint16(0, binary.length, false); // pack header using big endian becuase FUCK YOU I LIKE IT

        // Pack Payload
        const payloadView = new Uint8Array(buffer, 2);
        payloadView.set(binary);

        // let payload = new Uint8Array(binary.length + 2);
        // let header = Uint16Array.from([payload.length]);
        // payload.set(header, 0);
        // payload.set(binary, 2);
        console.log(buffer);
        this.send(buffer);
    }

    public onClose(event: CloseEvent) {
        console.log("Socket Closed: " + JSON.stringify(event));
    }

    public onError(event: Event) {
        console.log("Socket Error: " + JSON.stringify(event));
    }

    public onMessage(event: MessageEvent) {
        console.log("Message: " + JSON.stringify(event));
        this.handler.handle(event.data);
    }

    public send(data: any) {
        if ( this.ws.OPEN ) {
            console.log("Sending: " + data);
            this.ws.send(data);
        }
    }
}
