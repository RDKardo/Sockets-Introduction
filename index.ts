import router from './routes/router';
import Server from "./class/server";
import { SERVER_PORT } from "./global/environment";

const server = new Server();
server.app.use('/',router );

server.start(() => {
    console.log(`Servidor corriendo en el  puerto ${SERVER_PORT} `);
});
