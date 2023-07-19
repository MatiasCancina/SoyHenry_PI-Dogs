const { Dog } = require("../db");
const { getApiDogs } = require("../handlers/getApiDogs");

const updateDog = async (req, res) => {
    const { id } = req.params;

    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Name is required" });
        }

        if (name.length < 3 || name.length > 22) {
            return res.status(400).json({ error: "Name must be between 3 and 22 letters" });
        }

        // Verificar si ya existe un perro con el mismo nombre en la base de datos
        const existingDog = await Dog.findOne({ where: { name } });

        if (existingDog && existingDog.id !== id) {
            return res.status(400).json({ error: "A dog with this name already exists in the DB" });
        }

        // Obtener la lista de perros de la API
        const apiDogs = await getApiDogs();
        const apiDogNames = apiDogs.map((dog) => dog.name);

        // Verificar si el nombre ya existe en la lista de perros de la API
        if (apiDogNames.includes(name)) {
            return res.status(400).json({ error: "A dog with this name already exists in the API" });
        }

        // Actualizar el perro en la base de datos
        const updatedDog = await Dog.update({ name }, {
            returning: true,
            where: {
                id: id
            }
        });

        if (!updatedDog) return res.status(404).json({ error: "This dog does not exist" });

        return res.status(202).json(updatedDog[1][0]); // Enviar el perro actualizado

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    updateDog
};