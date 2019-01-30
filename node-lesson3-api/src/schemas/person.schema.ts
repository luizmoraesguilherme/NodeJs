import { EntitySchema } from 'typeorm';
import { Person } from 'src/modules/person/person.domain';

export const PersonSchema = new EntitySchema<Person>({
    name: 'person',
    tableName: 'PEO_PEOPLE',
    target: Person,
    columns: {
        id:{
            primary: true,
            generated: true,
            name: 'PEO_ID',
            type: Number
        },
        name:{
            name: 'PEO_NAME',
            type: String,
            nullable: false,
            length: 100
        },
        age:{
            name: 'PEO_AGE',
            type: Number,
            nullable: true
        }
    }
});