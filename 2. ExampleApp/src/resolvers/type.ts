import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';

//Resolver subtipos
const type: IResolvers = {
    Student: {
        courses: parent => {
            let coursesList : Array<any> = [];
            parent.courses.map( (c: String) => {
                coursesList.push(_.filter(database.courses, ['id', c])[0])
            })
            return coursesList;
        }
    }
};

export default type;