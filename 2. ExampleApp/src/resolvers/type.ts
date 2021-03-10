import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

//Resolver tipos incrustados
const type: IResolvers = {
    Student: {
        courses: parent => {
            let coursesList : Array<any> = [];
            database.courses.forEach( c => {
                if(parent.courses.includes(c.id)) coursesList.push(c)
            })
            
            return coursesList;
        }
    },
    Course: {
        students: parent => {
            let studentsList : Array<any> = [];
            database.students.forEach( s => {
                if( s.courses.includes(parent.id) ) studentsList.push(s);
            })
            return studentsList;
        },
    }
};

export default type;