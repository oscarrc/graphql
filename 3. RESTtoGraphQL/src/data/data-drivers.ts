import { F1 } from "./data-source"

// Fuente de datos REST
export class DriversData extends F1 {
    constructor(){
        super();
    }

    async getDrivers(){
        return await this.get("drivers.json?limit=853", {
            cacheOptions: {
                ttl: 60
            }
        })
    }
}