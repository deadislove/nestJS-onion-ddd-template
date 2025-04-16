import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "@domain/models/Entities";

export class SQLiteDatabase {
    getConnection(): TypeOrmModuleOptions  {
        return {
            type: 'sqlite',
            database: `database.sqlite`,
            entities: [
                User
            ],
            synchronize: false // set to false in production
        }
    }
}