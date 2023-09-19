import axios from "axios";
import Swal from "sweetalert2";

export const TYPES = {
  GET_ALL_DOGS: "GET_ALL_DOGS",
  GET_ALL_TEMPS: "GET_ALL_TEMPS",
  GET_DOG_NAME: "GET_DOG_NAME",
  CREATE_DOG: "CREATE_DOG",
  UPDATE_DOG_NAME: "UPDATE_DOG_NAME",
  DELETE_DOG: "DELETE_DOG",
  ORDER_BY_NAME: "ORDER_BY_NAME",
  ORDER_BY_WEIGHT: "ORDER_BY_WEIGHT",
  FILTER_BY_ORIGIN: "FILTER_BY_ORIGIN",
  FILTER_BY_TEMPS: "FILTER_BY_TEMPS",
  RESET_FILTERS: "RESET_FILTERS",
};

export const getAllDogs = () => {
  const URL = "http://localhost:8080/dogs";

  return (dispatch) => {
    return axios(URL)
      .then(({ data }) => {
        return dispatch({
          type: TYPES.GET_ALL_DOGS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  };
};

export const getAllTemps = () => {
  const URL = "http://localhost:8080/temperaments";

  return async (dispatch) => {
    const { data } = await axios(URL);
    return dispatch({
      type: TYPES.GET_ALL_TEMPS,
      payload: data,
    });
  };
};

export const getDogName = (name) => {
  const URL = `http://localhost:8080/dogs?name=${name}`;

  return async (dispatch) => {
    try {
      const { data } = await axios(URL);
      return dispatch({
        type: TYPES.GET_DOG_NAME,
        payload: data,
      });
    } catch (error) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Oops...",
        text: "That dog doesn´t exists",
      });
    }
  };
};

//*CREATE
export const createDog = (dog) => {
  const URL = "http://localhost:8080/dogs";

  return async (dispatch) => {
    try {
      await axios.post(URL, dog);
      Swal.fire({
        icon: "success",
        title: "The dog has been created",
        showConfirmButton: false,
        timer: 1500,
      });
      return dispatch({
        type: TYPES.CREATE_DOG,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      });
    }
  };
};

//*UPDATE
export const updateDogName = (id, newName) => {
  const URL = `http://localhost:8080/dogs/${id}`;

  return async (dispatch) => {
    try {
      const updatedName = { name: newName };

      await axios.put(URL, updatedName);

      return dispatch({
        type: TYPES.UPDATE_DOG_NAME,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.error,
      });
    }
  };
};

//*DELETE
export const deleteDbDogsAction = (id) => {
  return {
    type: TYPES.DELETE_DOG,
    payload: id,
  };
};

//*RESET FILTERS
export const resetFilters = () => {
  return {
    type: TYPES.RESET_FILTERS,
  };
};

//*ORDERS
export const orderByName = (order) => {
  return {
    type: TYPES.ORDER_BY_NAME,
    payload: order,
  };
};

export const orderByWeight = (weight) => {
  return {
    type: TYPES.ORDER_BY_WEIGHT,
    payload: weight,
  };
};

//*FILTERS
export const filterbyOrigin = (origin) => {
  return {
    type: TYPES.FILTER_BY_ORIGIN,
    payload: origin,
  };
};

export const filterbyTemps = (temp) => {
  return {
    type: TYPES.FILTER_BY_TEMPS,
    payload: temp,
  };
};
