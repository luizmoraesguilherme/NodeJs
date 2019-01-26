import { Injectable } from '@nestjs/common';
import { Driver } from './driver.domain';
import { Repository } from 'typeorm';
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
}
