import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lon: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => `${parent.givenName} ${parent.familyName}`,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Standing: {
        driver: parent => parent.Driver,
        carConstructor:  parent => parent.Constructors[0]
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    }
};

export default type;