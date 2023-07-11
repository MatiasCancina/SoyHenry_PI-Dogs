const validateDogMiddleware = async (req, res, next) => {   //validacion de todas las propiedades obligatorias que deben haber a la hora de hacer el post de un perro nuevo
    const { name, height, weight, life_span, temperaments } = req.body;
    
    if (!name || !life_span || !height || !weight || !temperaments)
        return res.status(400).json({ message: 'Missing values' })
    next()
}
module.exports = {
    validateDogMiddleware
}