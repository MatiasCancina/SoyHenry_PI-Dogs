const {Dog,Temperament} = require("../db")

const getDbDogs = async () => {
    const dbDogs = await Dog.findAll({
        include: {
            model: Temperament,
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
            temperaments: dog.temperaments?.map(temperament => temperament.name)
        }
    })
    return dogs;
}

module.exports = {
    getDbDogs
}