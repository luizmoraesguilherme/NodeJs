import { Controller, Get } from '@nestjs/common';
import { Driver } from './driver.domain';
import { DriverService } from './driver.service';


@Controller('driver')
export class DriverController {

    constructor(
        private readonly driverService: DriverService
    ){

    }

    @Get()
    public async list(): Promise<Driver[]> {
        return await this.driverService.all();
    }
}
