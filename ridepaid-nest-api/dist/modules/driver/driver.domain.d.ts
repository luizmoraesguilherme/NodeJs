import { Car } from "../car/car.domain";
export declare class Driver {
    id: number;
    name: string;
    licenseType: 'A' | 'B' | 'C' | 'AB' | 'C';
    email?: string;
    cars: Car[];
    constructor(name: string, licenseType: string, email?: string);
}
