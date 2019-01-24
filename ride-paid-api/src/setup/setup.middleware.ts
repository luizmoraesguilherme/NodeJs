import express from 'express';
import bodyParser from 'body-parser';

export const setupMiddlewares = (server: express.Application) => {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));
}