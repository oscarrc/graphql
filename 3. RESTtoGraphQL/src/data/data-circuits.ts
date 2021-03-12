import { F1 } from "./data-source"

// Fuente de datos REST
export class CircuitsData extends F1 {
    constructor(){
        super();
    }

    async getCircuits(limit:number = -1, page:number = 1){
        limit = limit < 0 ? 77 : limit;

        return await this.get(`circuits.json?limit=${limit}&offset=${(page-1) * limit}`, {
            cacheOptions: { ttl: 60 }
        })
    }

    async selectCircuit(id: string){
        return await this.get(`circuits/${id}.json`, {
            cacheOptions: { ttl: 60 }
        })
    }
}