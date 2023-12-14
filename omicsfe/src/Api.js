//REACT_APP_SERVER_URL is a env variable in .env file
const rootUri = process.env.REACT_APP_SERVER_URL
    ? process.env.REACT_APP_SERVER_URL
    : 'http://localhost:3000';

const apiBasePath = `${rootUri}/api`;

export const omicApis = {
    getGenStats: {
        url: `${apiBasePath}/getGenStats`,
        method: 'POST',
    },
    getAllGenName: {
        url: `${apiBasePath}/getAllGenName`,
        method: 'GET',
    },
    getGenData: {
        url: `${apiBasePath}/getGenData`,
        method: 'POST',
    }
};