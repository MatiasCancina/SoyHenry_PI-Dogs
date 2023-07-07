const { Dog, Temperament } = require("../db");
// const { getAllTemps } = require("./getAllTemps");

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
                : `https://www.dogalize.com/wp-content/uploads/2017/09/Dog.png` ,
            temperaments: temperaments
        })

        const uniqueTemp = new Set(temperaments)
        //Array donde se pushean los temperamentos del perro 
        const dogTemperaments = []
        for (const temperamentName of uniqueTemp) {
            let temperament = await Temperament.findOne({
                where: {
                    name: temperamentName,
                },
            });

            if (!temperament) {
                temperament = await Temperament.create({
                    name: temperamentName,
                });
            }
            dogTemperaments.push(temperament)
        }

        await newDog.addTemperaments(dogTemperaments)
        return res.status(201).json(newDog)

        // //? Verifico si la tabla de temperamentos esté cargada usando count(), de no estar cargada, la creamos
        // //? invocando a getAllTemps
        // const temperamentCount = await Temperament.count();
        // if (temperamentCount === 0) {
        //     await getAllTemps();
        // }

        // // const tempsFound = [];

        // // for (let i = 0; i < temperaments.length; i++) {
        // //     const tempFound = await Temperament.findByPk(temperaments[i]);
        // //     // const tempFound = await Temperament.findOne({ where: { name: temperaments[i] } });
        // //     if (!tempFound) {
        // //         throw new Error(`Tipo de ${temperaments[i]} no existe`);
        // //     }
        // //     tempsFound.push(tempFound);
        // // }

        // //? Añadimos el temperamento mediante método add de SQL, gracias a la relación entre Dog y Temperament
        // await newDog.addTemperaments(temperaments);

        // // const updatedDog = await Dog.findOne({
        // //     where: { id: newDog.id },
        // //     include: [Temperament],
        // //   });

        // //   newDog.temperaments = updatedDog.temperaments.map(
        // //     (temperament) => temperament.name
        // //   );

        // return newDog
        //     ? res.status(200).json(newDog)
        //     : res.status(400).json(error.message)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    postDog
}