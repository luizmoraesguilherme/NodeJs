import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from './person.domain';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>
    ){

    }

    public async all(): Promise<Person[]>{
        return await this.personRepository.find({
            order:{
                name: 'ASC'
            }
        })
    }
}
