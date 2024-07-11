import fastfy from 'fastify';
import { env } from './env';
import { transactionRoutes } from './routes/transactions';

const app = fastfy();

app.register(transactionRoutes, {
    prefix: 'transactions'
});



app.listen({ port: env.PORT }).then(() => {
    console.log(`Server running on port ${env.PORT}`)
})