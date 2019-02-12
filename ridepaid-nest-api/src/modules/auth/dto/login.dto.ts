import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator'

export class LoginDto {
    @IsEmail()
    public username: string;

    @IsNotEmpty()
    @MaxLength(9)
    public password: string;
}