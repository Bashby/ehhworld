FROM node:latest

# Meta
LABEL author="Brendan Ashby <brendan@brendanashby.com>"
LABEL version="0.1.0"

# Init environment
WORKDIR /usr/src/app

# Install deps
COPY package*.json ./
RUN npm install

# Bundle app
COPY . .

# Start app
EXPOSE 8080
CMD [ "npm", "start"]
