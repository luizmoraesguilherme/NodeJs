import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { Driver } from './driver.domain';
import { DriverService } from './driver.service';
import { DriverListDto } from './driver.list.dto';
import { DriverInsertDto } from './dto/driver.insert.dto';


@Controller('driver')
export class DriverController {

    constructor(
        private readonly driverService: DriverService
    ){

    }

    @Get()
    public async list(): Promise<DriverListDto[]> {
        return await this.driverService.all().then(
            (drivers: Driver[]) =>{
                return drivers.map(driver =>{
                    return new DriverListDto (driver.id, driver.name, driver.licenseType);
                })
            }
        );
    }

    @Post()
    @HttpCode(201)
    public async insert( @Body() driverDto : DriverInsertDto): Promise<DriverListDto> {
        const driver: Driver = new Driver(driverDto.name, driverDto.licenseType, driverDto.email);
        return await this.driverService.insert(driver).then(
            (driver) =>  new DriverListDto( driver.id, driver.name, driver.licenseType)
        );
    }
}
