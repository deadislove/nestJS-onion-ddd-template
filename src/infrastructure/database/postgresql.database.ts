import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

export class PostgresDatabase {
    getConnection(): TypeOrmModuleOptions  {
        return {
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT ?? "5432"),
            username: process.env.DB_USERNAME || 'user',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_NAME || 'my_database',
            entities: [],
            synchronize: false, // Set to false in production
            logging: false, // Disable logging in production
        }
    }
}