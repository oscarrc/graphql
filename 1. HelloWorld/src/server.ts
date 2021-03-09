import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema'
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const app = express();
const port = 5300;
const httpServer = createServer(app);

const server = new ApolloServer({
    schema,
    introspection: true
});

app.use(cors())
   .use(compression());

server.applyMiddleware({ app })

httpServer.listen(port, () => console.log(`Introducción a GraphQL: http://localhost:${port}/graphql`));