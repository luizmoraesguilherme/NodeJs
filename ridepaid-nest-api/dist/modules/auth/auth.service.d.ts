import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.domain';
import { JwtPayload } from './payload/jwt.payload';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(username: string, password: string): Promise<string>;
    validadeJwtToken(payload: JwtPayload): Promise<User>;
}
