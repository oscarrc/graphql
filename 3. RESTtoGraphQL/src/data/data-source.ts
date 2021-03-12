import { RESTDataSource } from "apollo-datasource-rest"

// Fuente de datos REST
export class F1 extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://ergast.com/api/f1/';
    }
}