import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        hola(): String {
            return 'Hola Mundo';
        },
        holaConNombre(__: void, { nombre }):String {
            return `Hola ${nombre}`;
        },
        holaAlCursoGraphQL(): String {
            return 'Hola desde el curso GraphQL';
        }
    }
}

export default query;