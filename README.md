# How you Doin'?  ||  Mood

Our application will help you track your mood and can help you find out how it came there. The goal of the app is to create awareness and provide you with useful tips on how to improve it and to visualise how your mood has been over the course of time. 


## Goals
See Wiki for an up to date list - https://github.com/kowhai-2018/Final-Project/wiki/Goals


## How to start

```
git clone https://github.com/kowhai-2018/Final-Project.git
cd Final-Project && yarn
```

To start the development server with a watcher that rebuilds your code, run `yarn dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

This application is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
yarn client
```
and in the other:
```sh
yarn server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

