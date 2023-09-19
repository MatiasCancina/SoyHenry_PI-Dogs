const axios = require('axios');

const URL = 'https://api.thedogapi.com/v1/breeds'

const getApiDogs = async () => {
    const { data } = await axios(`${URL}?api_key=${process.env.API_KEY}`)
    const infoApi = data.map(   //por cada obj (dog) se trae las props indicadas
        (dog) => {
            return {
                id: dog.id,
                name: dog.name,
                life_span: dog.life_span,
                image: dog.image?.url,
                height: dog['height']['metric'],
                weight: dog['weight']['metric'],
                temperament: dog?.temperament
            }
        }
    )
    return infoApi
}

module.exports = {
    getApiDogs
}