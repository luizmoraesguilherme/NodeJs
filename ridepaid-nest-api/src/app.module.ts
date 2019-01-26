import { Module } from '@nestjs/common';
import { DriverModule } from './modules/driver/driver.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverSchema } from './schemas/driver.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'oitooito',
      username: 'root',
      password: 'root',
      entities:[
        DriverSchema
      ]
    }),
    DriverModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
