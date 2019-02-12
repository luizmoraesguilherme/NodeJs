import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.domain';
import { HashingModule } from 'src/shared/hashing/hashing.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        HashingModule,
        forwardRef(() => AuthModule)
    ],
    providers: [
        UserService
    ],
    controllers: [UserController],
    exports: [
        UserService
    ]
})
export class UserModule { }
