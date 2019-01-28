export class DriverListDto{

    public id: number;
    public name: string;
    public licenseType: string;

    public constructor(id: number, name: string, licenseType: string){
        this.id = id;
        this.name = name;
        this.licenseType = licenseType;
    }
}