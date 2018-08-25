// Lib imports
import Convict from "convict";

// Config Schema
export const config = Convict({
    debug: {
        doc: "when true, put application in debug mode and emit debugging messages",
        format: "Boolean",
        default: false,
        env: "DEBUG_MODE",
    },
    render: {
        fps: {
            doc: "the target / max fps the main game loop will try to render",
            format: "Number",
            default: 75,
            env: "RENDER_FPS_TARGET",
        },
    },
    server: {
        protocol: {
            doc: "server URL connection protocol",
            format: ["http", "https", "ws", "wss"],
            default: "ws",
            env: "SERVER_PROTOCOL",
        },
        host: {
            doc: "server URL connection host",
            format: "String",
            default: "localhost",
            env: "SERVER_HOST",
        },
        port: {
            doc: "server URL connection port",
            format: "port",
            default: 8081,
            env: "SERVER_PORT",
        },
        basePath: {
            doc: "server URL connection base path",
            format: "String",
            default: "ws",
            env: "SERVER_BASEPATH",
        },
    },
});

// Validate Config
config.validate({allowed: "strict"});

// Constants
export const CLIENT_VERSION: string = process.env.npm_package_version;
export const SERVER_URL: string = `${config.get("server.protocol")}://${config.get("server.host")}:${config.get("server.port")}/${config.get("server.basePath")}`;
