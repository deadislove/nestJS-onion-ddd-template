import { MySQLDatabase, PostgresDatabase, SQLiteDatabase } from ".";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class DatabaseFactory {
    static createDatabaseConnection(dbType:string): TypeOrmModuleOptions  {
        switch(dbType){
            case "sqlite":
                return new SQLiteDatabase().getConnection()
            case 'postgres':
                return new PostgresDatabase().getConnection()
            case 'mysql':
                return new MySQLDatabase().getConnection()
            default:
                throw new Error('Unsupported database type')
        }
    }
}