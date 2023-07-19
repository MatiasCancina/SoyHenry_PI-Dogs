const { Dog } = require("../db");

const deleteDog = async (req, res) => {
    const { id } = req.params;

    try {
        if (typeof id === 'number') return res.json({ error: 'You can not delete this dog' }) // no se puede eliminar un perro de la api (id = integer)

        const foundDog = await Dog.findByPk(id)

        if (!foundDog.id) return res.json({ error: 'This dog does not exist' })

        foundDog.destroy({
            where: {
                id: id
            }
        })

        return res
            .status(200)
            .json(`${foundDog.name} was deleted`)

    } catch (error) {
        return res
            .status(500)
            .json({ error: error.message })
    }
}

module.exports = {
    deleteDog
}