import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

//Mutaciones de los datos
const mutation: IResolvers = {
    Mutation: {
        addCourse(__: void, { course }): any {
            const courseItem = {
                id: String(database.courses.length + 1),
                title: course.title,
                description: course.description,
                clases: course.clases,
                time: course.time,
                level: course.level,
                logo: course.logo,
                path: course.path,
                teacher: course.teacher,
                reviews: []
            }

            if(database.courses.findIndex( c => c.title === courseItem.title) < 0 ){
                database.courses.push(courseItem);
                return courseItem;
            }

            return {
                id: -1,
                title: "El curso ya existe",
                description: `No se ha podido añadir el curso, ya existe un curso con título ${courseItem.title}`,
                clases: -1,
                time: 0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        },
        editCourse(__: void, { course }):any{
            const index = database.courses.findIndex( c => c.id === course.id)

            if( index >= 0 ){
                database.courses[index] = { ...database.courses[index], ...course};
                return database.courses[index];
            }

            return {
                id: -1,
                title: "El curso no existe",
                description: `No se ha podido editar el curso, ya que no existe un curso con id ${course.id}`,
                clases: -1,
                time: 0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        },
        deleteCourse(___: void, { id }):any{
            const index = database.courses.findIndex( c => c.id === id)

            if( index >= 0 ){
                const toDelete = database.courses[index];
                database.courses.splice(index, 1);
                return toDelete;
            }

            return {
                id: -1,
                title: "El curso no existe",
                description: `No se ha podido eliminar el curso, ya que no existe un curso con id ${id}`,
                clases: -1,
                time: 0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        }
    }
};

export default mutation;