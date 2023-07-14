import axios from 'axios';

export const TYPES = {
    GET_ALL_DOGS: 'GET_ALL_DOGS',
    GET_ALL_TEMPS: 'GET_ALL_TEMPS',
    GET_DOG_NAME: 'GET_DOG_NAME',
    CREATE_DOG: 'CREATE_DOG',
    DELETE_DOG: 'DELETE_DOG',
    ORDER_BY_NAME: 'ORDER_BY_NAME',
    ORDER_BY_WEIGHT: 'ORDER_BY_WEIGHT',
    FILTER_BY_ORIGIN: 'FILTER_BY_ORIGIN',
    FILTER_BY_TEMPS: 'FILTER_BY_TEMPS',
    RESET_FILTERS: 'RESET_FILTERS'
}

export const getAllDogs = () => {
    const URL = 'http://localhost:8080/dogs';

    return async (dispatch) => {
        const { data } = await axios(URL);

        return dispatch({
            type: TYPES.GET_ALL_DOGS,
            payload: data
        })
    }
}

export const getAllTemps = () => {
    const URL = 'http://localhost:8080/temperaments';

    return async (dispatch) => {
        const { data } = await axios(URL);
        return dispatch({
            type: TYPES.GET_ALL_TEMPS,
            payload: data
        })
    }
}

export const getDogName = (name) => {
    const URL = `http://localhost:8080/dogs?name=${name}`;

    return async (dispatch) => {
        try {
            const { data } = await axios(URL);
            return dispatch({
                type: TYPES.GET_DOG_NAME,
                payload: data
            })
        } catch (error) {
            alert('That dog doesn´t exists')
        }
    }
}

//*CREATE 
export const createDog = (dog) => {
    const URL = 'http://localhost:8080/dogs'

    return async (dispatch) => {
        try {
            await axios.post(URL, dog)

            return dispatch({
                type: TYPES.CREATE_DOG
            })
        } catch (error) {
            alert('That dog already exists')
        }
    }
}

//*DELETE
//?TRAE LA INFO
export const deleteDbDogsAction = (id) => {
    return {
        type: TYPES.DELETE_DOG,
        payload: id
    }
}

//*RESET FILTERS
export const resetFilters = () => {
    return {
        type: TYPES.RESET_FILTERS
    }
}

//*ORDERS
export const orderByName = (order) => {
    return {
        type: TYPES.ORDER_BY_NAME,
        payload: order
    }
}

export const orderByWeight = (weight) => {
    return {
        type: TYPES.ORDER_BY_WEIGHT,
        payload: weight,
    }
}

//*FILTERS
export const filterbyOrigin = (origin) => {
    return {
        type: TYPES.FILTER_BY_ORIGIN,
        payload: origin
    }
}

export const filterbyTemps = (temp) => {
    return {
        type: TYPES.FILTER_BY_TEMPS,
        payload: temp
    }
}