import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        students(): String {
            return "Lista de estudiantes";
        }
    }
};

export default query;