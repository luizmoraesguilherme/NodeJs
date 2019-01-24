import express from 'express';

export class DriverController {

    public list(_: express.Request, res: express.Response): void {
        res.status(200).send({});
    }
}