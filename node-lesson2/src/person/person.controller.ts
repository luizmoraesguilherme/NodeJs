import express from 'express';

export class PersonController {
    public list(_:express.Request, res:express.Response): void {
        res.status(200).send({});
    }
}