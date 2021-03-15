import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import expressPlayground from 'graphql-playground-middleware-express';
import schema from './schema';

const PORT = 5200;
const app = express();
const httpServer = createServer(app);
const server = new ApolloServer({
    schema,
    introspection: true
});

app.use(cors())
   .use(compression());

server.applyMiddleware({ app });

app.get('/', expressPlayground({
    endpoint: "/graphql"
}))

httpServer.listen(PORT, () => {
    console.log(`Academia está online en http://localhost:${PORT}`)
});