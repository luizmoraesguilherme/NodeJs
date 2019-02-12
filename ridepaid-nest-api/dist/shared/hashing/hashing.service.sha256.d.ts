import { HashingServiceBase } from "./hashing.service.base";
export declare class HashingServiceSha256 extends HashingServiceBase {
    hash(raw: string): string;
}
