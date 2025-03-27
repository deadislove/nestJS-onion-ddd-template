import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class MySQLDatabase {
    getConnection(): TypeOrmModuleOptions  {
        return {
            type: 'mysql',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT ?? "3306"),
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_NAME || 'database',
            entities: [],
            synchronize: false, // Set to false in production
            logging: false, // Disable logging in production
        }
    }
}