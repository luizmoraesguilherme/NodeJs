import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secretOrPrivateKey: 'season',
            signOptions: {
                jwtid: 'oitooito',
                expiresIn: 60
            }
        })
    ],
    providers: [
        UserService
    ]
})
export class AuthModule { 

}
