import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';

//Resolver tipos incrustados
const type: IResolvers = {
    Student: {
        courses: parent => {
            let coursesList : Array<any> = [];
            parent.courses.map( (c: String) => {
                coursesList.push(_.filter(database.courses, ['id', c])[0])
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