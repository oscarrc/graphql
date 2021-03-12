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
        async driversRoundList(_:void, { year, round }, { dataSources }){
            return await dataSources.drivers.getRoundDrivers( year, round ).then( (data:any) =>  data.MRData.DriverTable.Drivers );
        }
    }
};

export default query;