export class UserListDto {
    public id: number;
    public username: string;

    public constructor(id: number, username: string){
        this.id = id;
        this.username = username;
    }
}