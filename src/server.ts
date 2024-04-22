import fastify from 'fastify';
import { getContent } from './domain/externalFetch';

const server = fastify();

server.get('/bianca', async ()=>{
    const content = await getContent('http://bianca.com');
    return {status: 200, content: content};
});

const port = process.env.PORT ? Number(process.env.PORT) : 8080;

server.listen({
    host: '0.0.0.0',
    port: port
}).then(()=>{
    console.log(`Server is running on port :${port}`)
})