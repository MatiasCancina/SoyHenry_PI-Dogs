import axios from 'axios';

export const TYPES = {
    GET_ALL_DOGS: 'GET_ALL_DOGS'
}

export const getAllDogs = () => {
    const URL = 'http://localhost:8080/dogs';

    return async (dispatch) => {
        const { data } = await axios(URL);
        console.log(data);

        return dispatch({
            type: TYPES.GET_ALL_DOGS,
            payload: data
        })
    }
} 