import axios from "axios";
import { deleteDbDogsAction } from "../../redux/actions";

export const deleteDbDogs = async (id, dispatch) => {
    try {
        dispatch(deleteDbDogsAction(id))
        const { data } = await axios.delete(`http://localhost:8080/dogs/${id}`)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}