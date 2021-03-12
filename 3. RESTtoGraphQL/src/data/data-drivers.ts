import { checkYear } from "../lib/utils";
import { F1 } from "./data-source"

// Fuente de datos REST
export class DriversData extends F1 {
    constructor(){
        super();
    }

    async getDrivers(limit: number = -1, page: number = 1){
        limit = limit < 0 ? 853 : limit;

        return await this.get(`drivers.json?limit=${limit}&offset=${(page - 1 )* limit}`, {
            cacheOptions: {
                ttl: 60
            }
        })
    }

    async getSeasonDrivers(year: string){
        year = checkYear(year);
        
        return await this.get(`${year}/drivers.json`, {
            cacheOptions: {
                ttl: 60
            }
        })
    }
}