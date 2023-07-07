const { Dog } = require("../db")

const updateDog = async (req, res) => {
    try {
        const { id } = req.params

        const updatedDog = await Dog.update({ ...req.body }, {
            returning: true,
            where: {
                id: id
            }
        })

        if (!updatedDog.id) return res.send('This dog does not exist')

        return updatedDog.id !== 'number'
            ? res.status(202).json(updatedDog[1][0])
            : res.status(401).send('You can´t update this dog')

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    updateDog
}