export class DriverInsertDto {

    public name: string;
    public licenseType: string;
    public email?: string;

    public constructor(name:string, liceseType: string, email?:string){
        this.name = name;
        this.licenseType = liceseType;
        this.email = email;
    }

}