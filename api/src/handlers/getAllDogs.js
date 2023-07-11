const { getApiDogs } = require("./getApiDogs");
const { getDbDogs } = require("./getDbDogs");

const getAllDogs = async () => {    //se guardan los perros tanto de la api como la db
    const apiDogs = await getApiDogs();
    const dbDogs = await getDbDogs();

    return [...apiDogs, ...dbDogs]
}

module.exports = {
    getAllDogs
}