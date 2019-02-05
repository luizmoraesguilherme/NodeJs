import { Controller, Get, Post, HttpCode, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { Driver } from './driver.domain';
import { DriverService } from './driver.service';
import { DriverListDto } from './driver.list.dto';
import { DriverInsertDto } from './dto/driver.insert.dto';
import { promises } from 'fs';


@Controller('driver')
export class DriverController {

    constructor(
        private readonly driverService: DriverService
    ){

    }

    @Get()
    public async list(@Query('page')page?: number, @Query('size')size?: number, @Query('name') name?: string): Promise<DriverListDto[]> {
        return await this.driverService.all(name, page, size).then(
            (drivers: Driver[]) =>{
                return drivers.map(driver =>{
                    let driverDto: DriverListDto = new DriverListDto (driver.id, driver.name, driver.licenseType);
                    if( driver.cars){
                        for(let car of driver.cars){
                            driverDto.cars.push({
                                id: car.id,
                                brand: car.brand,
                                model: car.model
                            })
                        }
                    }
                    return driverDto;
                })
            }
        );
    }


    @Get(':id')
    @HttpCode(302)
    public async getDriverByName(@Param('id') id: number): Promise<DriverListDto> {
        return await this.driverService.driverById(id).then(
            (driver) => {
                if (Driver){
                    return new DriverListDto(driver.id, driver.name, driver.licenseType);
                }else{
                    throw new NotFoundException(`Não existe motorista com o id ${id}`);
                }
            }
        )
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
