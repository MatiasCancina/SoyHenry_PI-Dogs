import axios from "axios";
import { deleteDbDogsAction } from "../../redux/actions";

export const deleteDbDogs = async (id, dispatch) => {
    try {
        dispatch(deleteDbDogsAction(id))
        await axios.delete(`http://localhost:8080/dogs/${id}`)
        alert('The dog has been deleted')
    } catch (error) {
        console.log(error);
    }
}