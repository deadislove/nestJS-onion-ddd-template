import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";

@Injectable()
export class ConfigService {
    constructor(
        private readonly configService: NestConfigService
    ) { }

    get jwtSecret(): string {
        return this.configService.get<string>('JWT_SECRET', 'default-secret');
    }
}