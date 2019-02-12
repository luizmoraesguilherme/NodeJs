"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const hashing_service_base_1 = require("./hashing.service.base");
const hashing_service_sha256_1 = require("./hashing.service.sha256");
let HashingModule = class HashingModule {
};
HashingModule = __decorate([
    common_1.Module({
        providers: [
            {
                provide: hashing_service_base_1.HashingServiceBase,
                useClass: hashing_service_sha256_1.HashingServiceSha256
            }
        ],
        exports: [
            hashing_service_base_1.HashingServiceBase
        ]
    })
], HashingModule);
exports.HashingModule = HashingModule;
//# sourceMappingURL=hashing.module.js.map