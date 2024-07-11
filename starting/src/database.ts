import { knex as setupKnex } from 'knex';
import { env } from './env';
import path from 'path';
import fs from 'fs';

// Verifique se o diretório do banco de dados existe
console.log(env.DATABASE_DIR);
const dbPath = path.resolve(env.DATABASE_DIR);
if (!fs.existsSync(path.dirname(dbPath))) {
    console.error(`Directory does not exist: ${path.dirname(dbPath)}`);
    process.exit(1);
}


export const config = {
    client: 'sqlite3',
    connection: {
        filename: env.DATABASE_DIR
    },
    useNullAsDefault: true,
};

export const knex = setupKnex(config);