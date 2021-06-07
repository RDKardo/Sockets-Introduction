"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./routes/router"));
const server_1 = __importDefault(require("./class/server"));
const express_1 = __importDefault(require("express"));
const environment_1 = require("./global/environment");
const server = new server_1.default();
// Body Parserser
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`Servidor corriendo en el  puerto ${environment_1.SERVER_PORT} `);
});
