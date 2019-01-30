import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonSchema } from './schemas/person.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      database: 'peopleApi',
      username: 'root',
      password: 'root',
      entities:[
       PersonSchema
      ]
    }),
    PersonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
