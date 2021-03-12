const getWikipediaMobileUrl = (url: String) => {
    return url ? url.replace('wikipedia', 'm.wikipedia') : ""
}

const checkYear = (year: String) => {    
    const currentYear = new Date().getFullYear();
    if(isNaN(+year) || +year < 1950 || +year > currentYear) return String(currentYear);
    return year;
}

const checkRound = (round: Number) => {    
    if(round >= 100 || round < 1) return 1;
    return round;
}


export { getWikipediaMobileUrl, checkYear, checkRound }