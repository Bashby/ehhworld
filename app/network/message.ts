// import * as protobuff from 'protobufjs';
import { protobuf as message } from "./message.compiled";

export class MessageHandler {
    public transport: (Uint8Array) => void;

    constructor(transport: (Uint8Array) => void) {
        this.transport = transport;
    }

    public handle(data: any) {

    }

    public sendMove(payload: string): void {
       this.transport(message.Move.encode(message.Move.create({direction: payload})).finish());
    }
}
