import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonsList(_: void, __: void, { dataSources }){
            return await dataSources.seasons.getSeasons().then( (data:any) =>  data.MRData.SeasonTable.Seasons );
        },
        async racesByYear(_: void, { year }, { dataSources }){
            return await dataSources.races.getYear( year ).then( (data:any) => data.MRData.RaceTable.Races);
        }
    }
};

export default query;