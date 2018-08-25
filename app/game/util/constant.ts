// Constants
// General
export const APP_VERSION: string = process.env.NPM_PACKAGE_VERSION;
export const DEBUG_MODE: boolean = process.env.NODE_ENV !== "production";

// Rendering
export const RENDER_FPS_TARGET: number = parseInt(process.env.RENDER_TARGET_FPS, 10) || 75;

// Networking
const SERVER_PROTOCOL: string = process.env.SERVER_PROTOCOL || "ws";
const SERVER_HOST: string = process.env.SERVER_HOST || "localhost";
const SERVER_PORT: string = process.env.SERVER_PORT || "8081";
const SERVER_BASE_PATH: string = process.env.SERVER_BASE_PATH || "";
export const SERVER_URL: string = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}/${SERVER_BASE_PATH}`;
