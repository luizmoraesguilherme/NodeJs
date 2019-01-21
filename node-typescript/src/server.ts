import express from 'express';

const server = express();

server.get('/',(_, res) => {
    res.status(200).send('ola, API NodeJs com TypeScript!');
});

export default server;