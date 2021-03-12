import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonsList(_: void, __: void, { dataSources }){
            return await dataSources.seasons.getSeasons().then( (data:any) =>  data.MRData.SeasonTable.Seasons );
        },
        async racesByYear(_: void, { year }, { dataSources }){
            return await dataSources.races.getYear( year ).then( (data:any) => data.MRData.RaceTable.Races);
        },
        async raceSelect(_: void, { year, round }, { dataSources }){
            return await dataSources.races.getYearRound( year, round ).then( (data:any) => data.MRData.RaceTable.Races[0]);
        },
        async driversList(_: void, { limit, page }, { dataSources }){
            return await dataSources.drivers.getDrivers( limit, page ).then( (data:any) =>  data.MRData.DriverTable.Drivers );
        },
        async driversSeasonList(_:void, { year }, { dataSources }){
            return await dataSources.drivers.getSeasonDrivers( year ).then( (data:any) =>  data.MRData.DriverTable.Drivers );
        },
        async driversRaceList(_:void, { year, round }, { dataSources }){
            return await dataSources.drivers.getRaceDrivers( year, round ).then( (data:any) =>  data.MRData.DriverTable.Drivers );
        },
        async driverSelect(_: void, { id }, { dataSources }){
            return await dataSources.drivers.getDriver( id ).then( (data:any) =>  data.MRData.DriverTable.Drivers[0] );
        },
        async standingsByYear(_: void, { year }, { dataSources }){
            return await dataSources.standings.getStandings( year ).then( (data:any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings );
        },
        async circuitsList(_: void, { limit, page }, { dataSources }){
            return await dataSources.circuits.getCircuits( limit, page ).then( (data:any) =>  data.MRData.CircuitTable.Circuits );
        }
    }
};

export default query;