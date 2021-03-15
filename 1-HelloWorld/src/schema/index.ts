import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import 'graphql-import-node'; //Importar ficheros .graphql
import typeDefs from './schema.graphql'
import resolvers from '../resolvers/resolvers.map';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema;