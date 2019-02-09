import { Module } from '@nestjs/common';
import { HashingServiceBase } from './hashing.service.base';
import { HashingServiceSha256 } from './hashing.service.sha256';

@Module({
    providers:[
        {
            provide: HashingServiceBase,
            useClass: HashingServiceSha256
        }
    ],
    exports:[
        HashingServiceBase
    ]
})
export class HashingModule {}
