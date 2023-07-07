const { getApiDogs } = require("./getApiDogs");
const { getDbDogs } = require("./getDbDogs");

const getAllDogs = async () => {
    const apiDogs = await getApiDogs();
    const dbDogs = await getDbDogs();

    return [...apiDogs, ...dbDogs]
}

module.exports = {
    getAllDogs
}