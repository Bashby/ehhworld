import * as $protobuf from "protobufjs";

/** Namespace protobuf. */
export namespace protobuf {

    /** Properties of a Message. */
    interface IMessage {

        /** Message move */
        move?: (protobuf.IMove|null);

        /** Message attack */
        attack?: (protobuf.IAttack|null);

        /** Message build */
        build?: (protobuf.IBuild|null);

        /** Message sleep */
        sleep?: (protobuf.ISleep|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protobuf.IMessage);

        /** Message move. */
        public move?: (protobuf.IMove|null);

        /** Message attack. */
        public attack?: (protobuf.IAttack|null);

        /** Message build. */
        public build?: (protobuf.IBuild|null);

        /** Message sleep. */
        public sleep?: (protobuf.ISleep|null);

        /** Message payload. */
        public payload?: ("move"|"attack"|"build"|"sleep");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: protobuf.IMessage): protobuf.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protobuf.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protobuf.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protobuf.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protobuf.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): protobuf.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protobuf.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Move. */
    interface IMove {

        /** Move direction */
        direction?: (string|null);
    }

    /** Represents a Move. */
    class Move implements IMove {

        /**
         * Constructs a new Move.
         * @param [properties] Properties to set
         */
        constructor(properties?: protobuf.IMove);

        /** Move direction. */
        public direction: string;

        /**
         * Creates a new Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Move instance
         */
        public static create(properties?: protobuf.IMove): protobuf.Move;

        /**
         * Encodes the specified Move message. Does not implicitly {@link protobuf.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protobuf.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link protobuf.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protobuf.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf.Move;

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf.Move;

        /**
         * Verifies a Move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Move
         */
        public static fromObject(object: { [k: string]: any }): protobuf.Move;

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @param message Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protobuf.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Attack. */
    interface IAttack {

        /** Attack target */
        target?: (string|null);
    }

    /** Represents an Attack. */
    class Attack implements IAttack {

        /**
         * Constructs a new Attack.
         * @param [properties] Properties to set
         */
        constructor(properties?: protobuf.IAttack);

        /** Attack target. */
        public target: string;

        /**
         * Creates a new Attack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attack instance
         */
        public static create(properties?: protobuf.IAttack): protobuf.Attack;

        /**
         * Encodes the specified Attack message. Does not implicitly {@link protobuf.Attack.verify|verify} messages.
         * @param message Attack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protobuf.IAttack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attack message, length delimited. Does not implicitly {@link protobuf.Attack.verify|verify} messages.
         * @param message Attack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protobuf.IAttack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf.Attack;

        /**
         * Decodes an Attack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf.Attack;

        /**
         * Verifies an Attack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attack
         */
        public static fromObject(object: { [k: string]: any }): protobuf.Attack;

        /**
         * Creates a plain object from an Attack message. Also converts values to other types if specified.
         * @param message Attack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protobuf.Attack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Build. */
    interface IBuild {

        /** Build type */
        type?: (string|null);
    }

    /** Represents a Build. */
    class Build implements IBuild {

        /**
         * Constructs a new Build.
         * @param [properties] Properties to set
         */
        constructor(properties?: protobuf.IBuild);

        /** Build type. */
        public type: string;

        /**
         * Creates a new Build instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Build instance
         */
        public static create(properties?: protobuf.IBuild): protobuf.Build;

        /**
         * Encodes the specified Build message. Does not implicitly {@link protobuf.Build.verify|verify} messages.
         * @param message Build message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protobuf.IBuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Build message, length delimited. Does not implicitly {@link protobuf.Build.verify|verify} messages.
         * @param message Build message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protobuf.IBuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Build message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Build
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf.Build;

        /**
         * Decodes a Build message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Build
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf.Build;

        /**
         * Verifies a Build message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Build message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Build
         */
        public static fromObject(object: { [k: string]: any }): protobuf.Build;

        /**
         * Creates a plain object from a Build message. Also converts values to other types if specified.
         * @param message Build
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protobuf.Build, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Build to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Sleep. */
    interface ISleep {

        /** Sleep duration */
        duration?: (string|null);
    }

    /** Represents a Sleep. */
    class Sleep implements ISleep {

        /**
         * Constructs a new Sleep.
         * @param [properties] Properties to set
         */
        constructor(properties?: protobuf.ISleep);

        /** Sleep duration. */
        public duration: string;

        /**
         * Creates a new Sleep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sleep instance
         */
        public static create(properties?: protobuf.ISleep): protobuf.Sleep;

        /**
         * Encodes the specified Sleep message. Does not implicitly {@link protobuf.Sleep.verify|verify} messages.
         * @param message Sleep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protobuf.ISleep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sleep message, length delimited. Does not implicitly {@link protobuf.Sleep.verify|verify} messages.
         * @param message Sleep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protobuf.ISleep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sleep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sleep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf.Sleep;

        /**
         * Decodes a Sleep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sleep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf.Sleep;

        /**
         * Verifies a Sleep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sleep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sleep
         */
        public static fromObject(object: { [k: string]: any }): protobuf.Sleep;

        /**
         * Creates a plain object from a Sleep message. Also converts values to other types if specified.
         * @param message Sleep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protobuf.Sleep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sleep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
