/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protobuf = $root.protobuf = (() => {

    /**
     * Namespace protobuf.
     * @exports protobuf
     * @namespace
     */
    const protobuf = {};

    protobuf.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof protobuf
         * @interface IMessage
         * @property {protobuf.IMove|null} [move] Message move
         * @property {protobuf.IAttack|null} [attack] Message attack
         * @property {protobuf.IBuild|null} [build] Message build
         * @property {protobuf.ISleep|null} [sleep] Message sleep
         */

        /**
         * Constructs a new Message.
         * @memberof protobuf
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {protobuf.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message move.
         * @member {protobuf.IMove|null|undefined} move
         * @memberof protobuf.Message
         * @instance
         */
        Message.prototype.move = null;

        /**
         * Message attack.
         * @member {protobuf.IAttack|null|undefined} attack
         * @memberof protobuf.Message
         * @instance
         */
        Message.prototype.attack = null;

        /**
         * Message build.
         * @member {protobuf.IBuild|null|undefined} build
         * @memberof protobuf.Message
         * @instance
         */
        Message.prototype.build = null;

        /**
         * Message sleep.
         * @member {protobuf.ISleep|null|undefined} sleep
         * @memberof protobuf.Message
         * @instance
         */
        Message.prototype.sleep = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Message payload.
         * @member {"move"|"attack"|"build"|"sleep"|undefined} payload
         * @memberof protobuf.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["move", "attack", "build", "sleep"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof protobuf.Message
         * @static
         * @param {protobuf.IMessage=} [properties] Properties to set
         * @returns {protobuf.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link protobuf.Message.verify|verify} messages.
         * @function encode
         * @memberof protobuf.Message
         * @static
         * @param {protobuf.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.move != null && message.hasOwnProperty("move"))
                $root.protobuf.Move.encode(message.move, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.attack != null && message.hasOwnProperty("attack"))
                $root.protobuf.Attack.encode(message.attack, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.build != null && message.hasOwnProperty("build"))
                $root.protobuf.Build.encode(message.build, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.sleep != null && message.hasOwnProperty("sleep"))
                $root.protobuf.Sleep.encode(message.sleep, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protobuf.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.Message
         * @static
         * @param {protobuf.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.move = $root.protobuf.Move.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.attack = $root.protobuf.Attack.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.build = $root.protobuf.Build.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.sleep = $root.protobuf.Sleep.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof protobuf.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.move != null && message.hasOwnProperty("move")) {
                properties.payload = 1;
                {
                    let error = $root.protobuf.Move.verify(message.move);
                    if (error)
                        return "move." + error;
                }
            }
            if (message.attack != null && message.hasOwnProperty("attack")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.protobuf.Attack.verify(message.attack);
                    if (error)
                        return "attack." + error;
                }
            }
            if (message.build != null && message.hasOwnProperty("build")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.protobuf.Build.verify(message.build);
                    if (error)
                        return "build." + error;
                }
            }
            if (message.sleep != null && message.hasOwnProperty("sleep")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.protobuf.Sleep.verify(message.sleep);
                    if (error)
                        return "sleep." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.Message)
                return object;
            let message = new $root.protobuf.Message();
            if (object.move != null) {
                if (typeof object.move !== "object")
                    throw TypeError(".protobuf.Message.move: object expected");
                message.move = $root.protobuf.Move.fromObject(object.move);
            }
            if (object.attack != null) {
                if (typeof object.attack !== "object")
                    throw TypeError(".protobuf.Message.attack: object expected");
                message.attack = $root.protobuf.Attack.fromObject(object.attack);
            }
            if (object.build != null) {
                if (typeof object.build !== "object")
                    throw TypeError(".protobuf.Message.build: object expected");
                message.build = $root.protobuf.Build.fromObject(object.build);
            }
            if (object.sleep != null) {
                if (typeof object.sleep !== "object")
                    throw TypeError(".protobuf.Message.sleep: object expected");
                message.sleep = $root.protobuf.Sleep.fromObject(object.sleep);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.Message
         * @static
         * @param {protobuf.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.move != null && message.hasOwnProperty("move")) {
                object.move = $root.protobuf.Move.toObject(message.move, options);
                if (options.oneofs)
                    object.payload = "move";
            }
            if (message.attack != null && message.hasOwnProperty("attack")) {
                object.attack = $root.protobuf.Attack.toObject(message.attack, options);
                if (options.oneofs)
                    object.payload = "attack";
            }
            if (message.build != null && message.hasOwnProperty("build")) {
                object.build = $root.protobuf.Build.toObject(message.build, options);
                if (options.oneofs)
                    object.payload = "build";
            }
            if (message.sleep != null && message.hasOwnProperty("sleep")) {
                object.sleep = $root.protobuf.Sleep.toObject(message.sleep, options);
                if (options.oneofs)
                    object.payload = "sleep";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof protobuf.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    protobuf.Move = (function() {

        /**
         * Properties of a Move.
         * @memberof protobuf
         * @interface IMove
         * @property {string|null} [direction] Move direction
         */

        /**
         * Constructs a new Move.
         * @memberof protobuf
         * @classdesc Represents a Move.
         * @implements IMove
         * @constructor
         * @param {protobuf.IMove=} [properties] Properties to set
         */
        function Move(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Move direction.
         * @member {string} direction
         * @memberof protobuf.Move
         * @instance
         */
        Move.prototype.direction = "";

        /**
         * Creates a new Move instance using the specified properties.
         * @function create
         * @memberof protobuf.Move
         * @static
         * @param {protobuf.IMove=} [properties] Properties to set
         * @returns {protobuf.Move} Move instance
         */
        Move.create = function create(properties) {
            return new Move(properties);
        };

        /**
         * Encodes the specified Move message. Does not implicitly {@link protobuf.Move.verify|verify} messages.
         * @function encode
         * @memberof protobuf.Move
         * @static
         * @param {protobuf.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.direction != null && message.hasOwnProperty("direction"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.direction);
            return writer;
        };

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link protobuf.Move.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.Move
         * @static
         * @param {protobuf.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.Move();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.direction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Move message.
         * @function verify
         * @memberof protobuf.Move
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Move.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                if (!$util.isString(message.direction))
                    return "direction: string expected";
            return null;
        };

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.Move
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.Move} Move
         */
        Move.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.Move)
                return object;
            let message = new $root.protobuf.Move();
            if (object.direction != null)
                message.direction = String(object.direction);
            return message;
        };

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.Move
         * @static
         * @param {protobuf.Move} message Move
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Move.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.direction = "";
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = message.direction;
            return object;
        };

        /**
         * Converts this Move to JSON.
         * @function toJSON
         * @memberof protobuf.Move
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Move.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Move;
    })();

    protobuf.Attack = (function() {

        /**
         * Properties of an Attack.
         * @memberof protobuf
         * @interface IAttack
         * @property {string|null} [target] Attack target
         */

        /**
         * Constructs a new Attack.
         * @memberof protobuf
         * @classdesc Represents an Attack.
         * @implements IAttack
         * @constructor
         * @param {protobuf.IAttack=} [properties] Properties to set
         */
        function Attack(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Attack target.
         * @member {string} target
         * @memberof protobuf.Attack
         * @instance
         */
        Attack.prototype.target = "";

        /**
         * Creates a new Attack instance using the specified properties.
         * @function create
         * @memberof protobuf.Attack
         * @static
         * @param {protobuf.IAttack=} [properties] Properties to set
         * @returns {protobuf.Attack} Attack instance
         */
        Attack.create = function create(properties) {
            return new Attack(properties);
        };

        /**
         * Encodes the specified Attack message. Does not implicitly {@link protobuf.Attack.verify|verify} messages.
         * @function encode
         * @memberof protobuf.Attack
         * @static
         * @param {protobuf.IAttack} message Attack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.target != null && message.hasOwnProperty("target"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.target);
            return writer;
        };

        /**
         * Encodes the specified Attack message, length delimited. Does not implicitly {@link protobuf.Attack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.Attack
         * @static
         * @param {protobuf.IAttack} message Attack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Attack message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.Attack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.Attack} Attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.Attack();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.target = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Attack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.Attack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.Attack} Attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Attack message.
         * @function verify
         * @memberof protobuf.Attack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Attack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isString(message.target))
                    return "target: string expected";
            return null;
        };

        /**
         * Creates an Attack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.Attack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.Attack} Attack
         */
        Attack.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.Attack)
                return object;
            let message = new $root.protobuf.Attack();
            if (object.target != null)
                message.target = String(object.target);
            return message;
        };

        /**
         * Creates a plain object from an Attack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.Attack
         * @static
         * @param {protobuf.Attack} message Attack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Attack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.target = "";
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = message.target;
            return object;
        };

        /**
         * Converts this Attack to JSON.
         * @function toJSON
         * @memberof protobuf.Attack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Attack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Attack;
    })();

    protobuf.Build = (function() {

        /**
         * Properties of a Build.
         * @memberof protobuf
         * @interface IBuild
         * @property {string|null} [type] Build type
         */

        /**
         * Constructs a new Build.
         * @memberof protobuf
         * @classdesc Represents a Build.
         * @implements IBuild
         * @constructor
         * @param {protobuf.IBuild=} [properties] Properties to set
         */
        function Build(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Build type.
         * @member {string} type
         * @memberof protobuf.Build
         * @instance
         */
        Build.prototype.type = "";

        /**
         * Creates a new Build instance using the specified properties.
         * @function create
         * @memberof protobuf.Build
         * @static
         * @param {protobuf.IBuild=} [properties] Properties to set
         * @returns {protobuf.Build} Build instance
         */
        Build.create = function create(properties) {
            return new Build(properties);
        };

        /**
         * Encodes the specified Build message. Does not implicitly {@link protobuf.Build.verify|verify} messages.
         * @function encode
         * @memberof protobuf.Build
         * @static
         * @param {protobuf.IBuild} message Build message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Build.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified Build message, length delimited. Does not implicitly {@link protobuf.Build.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.Build
         * @static
         * @param {protobuf.IBuild} message Build message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Build.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Build message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.Build
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.Build} Build
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Build.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.Build();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Build message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.Build
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.Build} Build
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Build.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Build message.
         * @function verify
         * @memberof protobuf.Build
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Build.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates a Build message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.Build
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.Build} Build
         */
        Build.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.Build)
                return object;
            let message = new $root.protobuf.Build();
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from a Build message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.Build
         * @static
         * @param {protobuf.Build} message Build
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Build.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.type = "";
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this Build to JSON.
         * @function toJSON
         * @memberof protobuf.Build
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Build.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Build;
    })();

    protobuf.Sleep = (function() {

        /**
         * Properties of a Sleep.
         * @memberof protobuf
         * @interface ISleep
         * @property {string|null} [duration] Sleep duration
         */

        /**
         * Constructs a new Sleep.
         * @memberof protobuf
         * @classdesc Represents a Sleep.
         * @implements ISleep
         * @constructor
         * @param {protobuf.ISleep=} [properties] Properties to set
         */
        function Sleep(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sleep duration.
         * @member {string} duration
         * @memberof protobuf.Sleep
         * @instance
         */
        Sleep.prototype.duration = "";

        /**
         * Creates a new Sleep instance using the specified properties.
         * @function create
         * @memberof protobuf.Sleep
         * @static
         * @param {protobuf.ISleep=} [properties] Properties to set
         * @returns {protobuf.Sleep} Sleep instance
         */
        Sleep.create = function create(properties) {
            return new Sleep(properties);
        };

        /**
         * Encodes the specified Sleep message. Does not implicitly {@link protobuf.Sleep.verify|verify} messages.
         * @function encode
         * @memberof protobuf.Sleep
         * @static
         * @param {protobuf.ISleep} message Sleep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sleep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.duration);
            return writer;
        };

        /**
         * Encodes the specified Sleep message, length delimited. Does not implicitly {@link protobuf.Sleep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.Sleep
         * @static
         * @param {protobuf.ISleep} message Sleep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sleep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sleep message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.Sleep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.Sleep} Sleep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sleep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.Sleep();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.duration = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sleep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.Sleep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.Sleep} Sleep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sleep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sleep message.
         * @function verify
         * @memberof protobuf.Sleep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sleep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isString(message.duration))
                    return "duration: string expected";
            return null;
        };

        /**
         * Creates a Sleep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.Sleep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.Sleep} Sleep
         */
        Sleep.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.Sleep)
                return object;
            let message = new $root.protobuf.Sleep();
            if (object.duration != null)
                message.duration = String(object.duration);
            return message;
        };

        /**
         * Creates a plain object from a Sleep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.Sleep
         * @static
         * @param {protobuf.Sleep} message Sleep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sleep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.duration = "";
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            return object;
        };

        /**
         * Converts this Sleep to JSON.
         * @function toJSON
         * @memberof protobuf.Sleep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sleep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Sleep;
    })();

    return protobuf;
})();

export { $root as default };
