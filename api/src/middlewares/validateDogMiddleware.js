const validateDogMiddleware = async (req, res, next) => {
    const { name, height, weight, life_span, image, temperaments } = req.body;
    if (!name || !life_span || !image || !height || !weight || !temperaments)
        return res.status(400).json({ message: 'Missing values' })
    next()
}
module.exports = {
    validateDogMiddleware
}