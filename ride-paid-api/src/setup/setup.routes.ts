import express from 'express';
import { DriverController } from '../driver/driver.controller';

export const setupRoutes = (server: express.Application) => {
    const driverController: DriverController = new DriverController();
    
    server.route('/driver')
        .get(driverController.list);
}