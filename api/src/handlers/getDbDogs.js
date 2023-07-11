const { Dog, Temperament } = require("../db")

const getDbDogs = async () => {

    const dbDogs = await Dog.findAll({  //busca todos los perros de la db
        include: {
            model: Temperament, //? se usa el include para obtener info de los temperamentos de cada perro 
            attributes: ['name'],   //? especificamente del atributo 'name' de ese temperamento
            through: {  //? para NO incluir ningun atributo de la tabla de relacion entre ambos modelos 
                attributes: [],
            }
        }
    })

    const dogs = dbDogs.map(dog => {    //? busca en la db para para luego poder mostrar las propiedades de la forma indicada en el post

        let temps = ''; //? se inicializa vacia para guardar los temperamentos que se establezcan en el post  

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