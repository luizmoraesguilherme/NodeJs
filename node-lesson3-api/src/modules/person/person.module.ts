import { Module } from '@nestjs/common';
import { Person } from './person.domain';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';


@Module({
    imports:[
        TypeOrmModule.forFeature([Person])
    ],
    providers:[
        Person,
        PersonService
    ],
    controllers: [PersonController]
})
export class PersonModule {}
