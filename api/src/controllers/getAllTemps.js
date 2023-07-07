const axios = require('axios');
const { Temperament } = require('../db');

const getAllTemps = async (req, res) => {
    try {
        const { data } = await axios(`https://api.thedogapi.com/v1/breeds`)

        data.forEach(dog => {
            if (dog.temperament) {
                let temps = dog.temperament.split(', ') //? Le quito los espacios y las comas a los temperamentos
                                                        //? para separarlo correctament en el array
                temps.forEach(dogTemp => {              
                    Temperament.findOrCreate({ //? temperamento, y lo agrega mi modelo
                        where: { name: dogTemp } //? Busca en el modelo y si no encuentra crea el nuevo 
                    })                           
                })
            }
        });
        const tempsFound = await Temperament.findAll()

        return tempsFound.sort((a,b) => a.id - b.id)    //ordeno los temperamentos por su id de forma ascendente
            ? res.status(200).json(tempsFound)
            : res.status(404).send('Temperament not found');

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTemps
}