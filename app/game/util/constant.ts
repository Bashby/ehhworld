// Constants
// General
export const APP_VERSION: string = process.env.npm_package_version;
export const DEBUG_MODE: boolean = process.env.node_env !== "production";

// Rendering
export const RENDER_FPS_TARGET: number = parseInt(process.env.render_target_fps, 10) || 75;

// Networking
const SERVER_PROTOCOL: string = process.env.server_protocol || "ws";
const SERVER_HOST: string = process.env.server_host || "localhost";
const SERVER_PORT: string = process.env.server_port || "8081";
const SERVER_BASE_PATH: string = process.env.server_base_path || "";
export const SERVER_URL: string = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}/${SERVER_BASE_PATH}`;
