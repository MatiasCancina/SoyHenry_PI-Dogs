const { Dog, Temperament } = require("../db")

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

    const dogs = dbDogs.map(dog => {

        let temps = ''; //se inicliaza vacia para guardar los temperamentos que se establezcan en el post  

        dog.temperaments.map(temp => {
            if (temps === '') { //si es el primer temperamento lo guarda directamente en la variable de arriba
                temps = temp.name
            } else {    //si no es el primero, le agrega una coma y un ezpacio antes (", ")
                temps += `, ${temp.name}`
            }
        })

        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            image: dog.image,
            temperaments: temps

        }
    })

    return dogs;
}

module.exports = {
    getDbDogs
}