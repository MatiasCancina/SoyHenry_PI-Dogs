const { Dog, Temperament } = require("../db");

const postDog = async (req, res) => {
    const {
        name,
        height,
        weight,
        life_span,
        image,
        temperaments,
    } = req.body

    try {
        //? Buscamoos si ya existe un perro con el mismo nombre en la base de datos
        const dbDogs = Dog.findOne({
            where: {
                name
            },
        });

        if (dbDogs.length) return res.status(400).send('There is already a dog with that name');

        const newDog = await Dog.create({
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
            image: image //? si se pasa una imagen la pone y no sino pone una imagen por default    
                ? image
                : `https://www.dogalize.com/wp-content/uploads/2017/09/Dog.png`,
        })
        
        await newDog.addTemperaments(temperaments)

        return res
            .status(201)
            .json(newDog)
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: error.message })
    }
}
module.exports = {
    postDog
}