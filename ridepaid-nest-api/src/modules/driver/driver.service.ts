import { Injectable } from '@nestjs/common';
import { Driver } from './driver.domain';
import { Repository, InsertQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DriverService {

    constructor(
        @InjectRepository(Driver)
        private readonly driverRepository: Repository<Driver>
    ){

    }
    public async all(): Promise<Driver[]> {
        return await this.driverRepository.find({
            order: {
                name: 'ASC'
            }
        })
    }
    public async insert(driver: Driver): Promise<Driver>{ 
        return await this.driverRepository.save(driver);
    }  
}

