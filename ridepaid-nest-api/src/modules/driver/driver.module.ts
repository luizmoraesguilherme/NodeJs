import { Module } from "@nestjs/common";
import { Driver } from "./driver.domain";
import { DriverController } from "./driver.controller";
import { DriverService } from "./driver.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Driver])
    ],
    providers: [
        Driver,
        DriverController,
        DriverService
    ],
    controllers:[
        DriverController
    ]
    
})

export class DriverModule {

}