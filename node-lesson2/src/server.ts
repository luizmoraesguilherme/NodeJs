import express from 'express';
import { setupMiddlewares } from './setup/setup.middleware';
import { setupRoutes } from './setup/setup.routes';

export class server {
    private _server: express.Application;

    public get server(): express.Application {
        return this._server;
    }

    constructor(){
        this._server = express();
        setupMiddlewares(this._server);
        setupRoutes(this._server);
    }

    start(): void {
        this._server.listen(8000, () => {
            console.log("Server is runnig . . . ");
        })
    }


}