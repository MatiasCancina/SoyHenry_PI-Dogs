const { getAllDogs } = require("../handlers/getAllDogs");

const getDogByName = async (req, res) => {
    const { name } = req.query;

    try {
        const allDogs = await getAllDogs();
        const allDogsName = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));

        return allDogsName.length
            ? res.status(200).json(allDogsName)
            : res.status(404).json({ message: "There aren't dogs with that name" });

    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}

module.exports = {
    getDogByName
}