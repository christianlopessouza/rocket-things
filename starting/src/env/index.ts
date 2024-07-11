import 'dotenv/config'; // le os arquivos .dotenv e lança em variaveis ambiente (process)
import { z } from 'zod';
// Join ,Yup , Zod

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    DATABASE_DIR: z.string(),
    PORT: z.preprocess((val) => Number(val), z.number().default(3333)),
});

const _env = envSchema.safeParse(process.env);


if (_env.success === false) {
    console.log(_env.error.format());
    throw new Error('Invalid environment variables');
}

export const env = _env.data;