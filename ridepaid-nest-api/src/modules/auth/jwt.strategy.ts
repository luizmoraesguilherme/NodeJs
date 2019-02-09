import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from "./auth.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    public constructor(
        private readonly authService: AuthService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'season'
        });
     }

     public async validate(payload: any){
         const isValid: boolean = await this.authService.validadeJwtToken(payload);
         if (!isValid){
             throw new UnauthorizedException();
         }
         return true;
     }

}