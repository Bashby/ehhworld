<p align="center">
  <img src="app\asset\image\world.png" width="100" height="100" title="EhhWorld Logo">
</p>

# EhhWorldClient

Client code (Node/React/PixiJS) for interacting with EhhWorld.

## Tech Stack

- PixiJS: Handle WebGL rendering in browser (sprites)
- React/Redux: Handles UI layered on top of PixiJS (e.g. chat, inventory)

## Getting started

### Local Building

In the root of the project:

    npm install
    npm run dev

### Docker Building

> Note: On first run, create the development docker network via `docker network create ehh-world-dev-network`

    docker-compose up --build ehhio_client

## Interacting

Navigate to `localhost:8080` in your browser.
