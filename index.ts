import router from './routes/router';
import Server from "./class/server";
import express from 'express';
import { SERVER_PORT } from "./global/environment";


const server = new Server();
// Body Parserser
server.app.use(express.urlencoded({extended :  true }));
server.app.use(express.json());
server.app.use('/',router );
server.start(() => {
    console.log(`Servidor corriendo en el  puerto ${SERVER_PORT} `);
});
