import axios from 'axios';

export const TYPES = {
    GET_ALL_DOGS: 'GET_ALL_DOGS',
    GET_DOG_NAME: 'GET_DOG_NAME'
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

export const getDogName = (name) => {
    const URL = `http://localhost:8080/dogs?name=${name}`;

    return async (dispatch) => {
        const { data } = await axios(URL);

        return dispatch({
            type: TYPES.GET_DOG_NAME,
            payload: data
        })
    }
} 
