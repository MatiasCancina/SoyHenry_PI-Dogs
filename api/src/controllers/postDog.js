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
            temperaments: temperaments
        })

        const uniqueTemp = new Set(temperaments)    //? variable donde se almacenaran solamente valores unicos de lo que se establezca como temperaments 
     
        const dogTemperaments = [] //?Array donde se pushean los temperamentos del perro

        for (const temperamentName of uniqueTemp) { 
            let temperament = await Temperament.findOne({   //? recorre el array de temperamentos unicos para buscar coincidencias en el modelo de Temperament 
                where: {
                    name: temperamentName,
                },
            });

            if (!temperament) { //? si el temperamento no existe, lo crea en la base de datos de Temperament 
                temperament = await Temperament.create({
                    name: temperamentName,
                });
            }

            dogTemperaments.push(temperament)   //? se guarda el temperamento en  
        }

        await newDog.addTemperaments(dogTemperaments)

        return res
            .status(201)
            .json(newDog)
    }
    catch (error) {
        return res
            .statu(500)
            .json({ error: error.message })
    }
}
module.exports = {
    postDog
}