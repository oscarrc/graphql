import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const query: IResolvers = {
    Query: {
        students(): any {
            return database.students;
        },
        student(__: void, { id }): any {
            return database.students.filter( s => s.id === id)[0];
        },
        courses(): any {
            return database.courses;
        },
        course(__: void, { id }): any {
            return database.courses.filter( c => c.id === id)[0];
        }
    }
};

export default query;