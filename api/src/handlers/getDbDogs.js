const {Dog,Temperaments} = require("../db")

const getDbDogs = async () => {
    const dbDogs = await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    const dogs = dbDogs?.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            image: dog.image,
            temperament: dog.temperaments?.map(temperament => temperament.name)
        }
    })
    return dogs;
}

module.exports = {
    getDbDogs
}