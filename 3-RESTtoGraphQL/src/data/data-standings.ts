import { checkYear } from "../lib/utils";
import { F1 } from "./data-source"

// Fuente de datos REST
export class StandingsData extends F1 {
    constructor(){
        super();
    }

    async getDriverStandings(year: string){
        year = checkYear(year);

        return await this.get(`${year}/driverStandings.json`, {
            cacheOptions: { ttl: 60 }
        })
    }
}