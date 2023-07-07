const { Dog } = require("../db")

const updateDog = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedDog = await Dog.update({ ...req.body }, {  //? guarda una copia de todo el perro para poder modifficar cualquiera de sus propiedades 
            returning: true,
            where: {
                id: id
            }
        })

        if (!updatedDog) return res.send('This dog does not exist')

        return updatedDog.id !== 'number'   //? si el es uuid (es de la DB) devuelve el perro actualiado, sino tira error 
            ? res.status(202).json(updatedDog[1][0] )
            : res.status(401).send('You can´t update this dog')

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    updateDog
}