const { getAllDogs } = require("../handlers/getAllDogs");

const getDogById = async (req, res) => {
    const { id } = req.params;
    try {
        const dogs = await getAllDogs();

        if (id) {
            let dog;

            //? si el id es un entero, busca id por numero (en los de la api)
            if (!isNaN(id)) {
                dog = await dogs.find((dog) => dog.id === +id)
            }
            //? si el id no es un entero, busca id como string  (en los de la DB)
            else {
                dog = await dogs.find((dog) => dog.id === id)
            }
            return dog
                ? res.status(200).json(dog)
                : res.status(404).json('Dog not found')
        }
    } catch (error) {
        res
            .status(500)
            .json({ error: error.message })
    }
}

module.exports = {
    getDogById
}