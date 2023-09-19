import axios from "axios";
import { deleteDbDogsAction } from "../../redux/actions";
import Swal from "sweetalert2";

export const deleteDbDogs = async (id, dispatch) => {
  const result = await Swal.fire({
    title: "Are you sure you want to delete this dog?",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    icon: "warning",
  });

  if (result.isConfirmed) {
    try {
      await axios.delete(`http://localhost:8080/dogs/${id}`);
      dispatch(deleteDbDogsAction(id));
      Swal.fire("Dog successfully deleted", "", "success");
    } catch (error) {
      console.log(error);
    }
  }
};