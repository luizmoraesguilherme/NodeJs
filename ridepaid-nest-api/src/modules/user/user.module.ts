import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.domain';
import { HashingModule } from 'src/shared/hashing/hashing.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        HashingModule
    ],
    providers: [
        UserService
    ],
    controllers: [UserController],
    exports:[
        UserService
    ]
})
export class UserModule { }
