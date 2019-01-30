import { Controller, Get } from '@nestjs/common';
import { PersonListDto } from './dto/person.list.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(
        private readonly personService: PersonService
    ){

    }

    @Get()
    public async all(): Promise<PersonListDto[]>{
        return await this.personService.all().then(
            (people) => {
                return people.map(person => new PersonListDto(person.name, person.age))
            }
        );
    }
}
