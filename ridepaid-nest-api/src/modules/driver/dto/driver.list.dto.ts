import { CarListDto } from "../../car/dto/car.list.dto";

export class DriverListDto{

    public id: number;
    public name: string;
    public licenseType: string;
    public cars: CarListDto[];

    public constructor(id: number, name: string, licenseType: string){
        this.id = id;
        this.name = name;
        this.licenseType = licenseType;
        this.cars = [];
    }
}