import fastify from 'fastify';
import { memoriesRoutes  } from './routes/memories';
const app = fastify();
import cors from '@fastify/cors';


app
    .register(cors, {
        origin:true
    });
app
    .register(memoriesRoutes);

app
    .listen({
        port:3333,
    })
    .then(() =>{
        console.log('HTT server running on http://localhost:3333');
    });
