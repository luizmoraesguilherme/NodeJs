export class PersonListDto {
    public name: String;
    public age?: Number;

    constructor(
        name: String,
        age?: Number
    ){
        this.age = age;
        this.name = name;
    }
}