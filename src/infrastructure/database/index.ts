import { DatabaseFactory } from "./database.factory"
import { MySQLDatabase } from "./mysql.database"
import { PostgresDatabase } from "./postgresql.database"
import { SQLiteDatabase } from "./sqlite.database"

export {
    SQLiteDatabase,
    PostgresDatabase,
    MySQLDatabase,

    DatabaseFactory,
}

export default {
    SQLiteDatabase,
    PostgresDatabase,
    MySQLDatabase,

    DatabaseFactory,
}