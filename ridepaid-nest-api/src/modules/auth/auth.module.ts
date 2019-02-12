import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';


@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({
            defaultStrategy: 'jwt'
        }),
        JwtModule.register({
            secretOrPrivateKey: 'season',
            signOptions: {
                jwtid: 'oitooito',
                expiresIn: 60
            }
        })
    ],
    providers: [
        UserService,
        AuthService,
        JwtStrategy
    ],
    controllers: [AuthController]
    // exports: [
    //     AuthService,
    //     JwtAuthGuard,
    //     JwtStrategy
    // ]
})
export class AuthModule {

}
