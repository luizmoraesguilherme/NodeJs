import express from 'express';
import { PersonController } from '../person/person.controller';

export const setupRoutes = (server:express.Application) => {
    const personController: PersonController = new PersonController();

    server.route('/person')
        .get(personController.list);
}