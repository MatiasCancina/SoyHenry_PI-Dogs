const { Dog, Temperament } = require("../db")

const getDbDogs = async () => {
    console.log('entre');
    const dbDogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    console.log('entre');


    // dbDogs.forEach(dog =>console.log(dog.temperaments))

    const dogs = dbDogs.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            image: dog.image,
            temperaments: dog.temperaments.map(temp => temp.name)
        }
    })

    return dogs;
}

module.exports = {
    getDbDogs
}