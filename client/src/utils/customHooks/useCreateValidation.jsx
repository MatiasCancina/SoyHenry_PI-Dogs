import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDog } from "../../redux/actions";

const useCreateValidation = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_spanMin: "",
    life_spanMax: "",
    image: "",
    temperaments: [],
  };

  const [newDog, setNewDog] = useState(initialState); //? estado del perro a crear

  //? estado deonde se almacenan lo errores
  const [errors, setErrors] = useState({
    name: "",
    heightMax: "",
    heightMin: "",
    weightMin: "",
    weightMax: "",
    life_spanMin: "",
    life_spanMax: "",
    temperaments: "",
    image: "",
  });

  const validation = (e) => {
    // regex para validar el nombre
    const nameRegex = /^[A-Za-z]{3,30}$/;
    // El nombre debe tener entre 3 y 30 caracteres y solo puede contener letras.

    // regex para validar la URL de la imagen
    const imageRegex =
      /^https?:\/\/(?:[a-z]+\.)?[a-z]+\.[a-z]{2,}(?:\/[^\s]*)?\.(?:png|jpe?g|gif|bmp)$/;
    // La imagen debe ser una URL válida que termine en .png, .jpg, .jpeg o .gif.

    // regex para validar si se ingresan solo numeros
    const onlyNumsRegex = /^\d+$/;

    //*NAME VALIDATION
    if (e.target.name === "name") {
      if (!nameRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          name: "Must be between 3 y 30 letters",
        });
      } else {
        setErrors({
          ...errors,
          name: "",
        });
      }
    }

    //*WEIGHT VALIDATION
    if (e.target.name === "weightMin") {
      if (!onlyNumsRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          weightMin: "Must be a number",
        });
      } else if (Number(e.target.value) === 0) {
        setErrors({
          ...errors,
          weightMin: "Cannot be 0",
        });
      } else if (Number(e.target.value) >= Number(newDog.weightMax)) {
        setErrors({
          ...errors,
          weightMin: "Must be lower than the maximum",
        });
      } else {
        setErrors({
          //restablece mensaje de error en ambos campos
          ...errors,
          weightMin: "",
          weightMax: "",
        });
      }
    }

    if (e.target.name === "weightMax") {
      if (!onlyNumsRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          weightMax: "Must be a number",
        });
      } else if (Number(e.target.value) >= 98) {
        setErrors({
          ...errors,
          weightMax: "Must be lower than 98",
        });
      } else if (Number(e.target.value) <= Number(newDog.weightMin)) {
        setErrors({
          ...errors,
          weightMax: "Must be higher than the minimum",
        });
      } else {
        //restablece mensaje de error en ambos campos
        setErrors({
          ...errors,
          weightMax: "",
          weightMin: "",
        });
      }
    }

    //*HEIGHT VALIDATION
    if (e.target.name === "heightMin") {
      if (!onlyNumsRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          heightMin: "Must be a number",
        });
      } else if (Number(e.target.value) <= 8) {
        setErrors({
          ...errors,
          heightMin: "Must be higher than 8",
        });
      } else if (Number(e.target.value) >= Number(newDog.heightMax)) {
        setErrors({
          ...errors,
          heightMin: "Must be lower than the maximum",
        });
      } else {
        //restablece mensaje de error en ambos campos
        setErrors({
          ...errors,
          heightMin: "",
          heightMax: "",
        });
      }
    }

    if (e.target.name === "heightMax") {
      if (!onlyNumsRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          heightMax: "Must be a number",
        });
      } else if (Number(e.target.value) >= 147) {
        setErrors({
          ...errors,
          heightMax: "Must be lower than 147",
        });
      } else if (Number(e.target.value) <= Number(newDog.heightMin)) {
        setErrors({
          ...errors,
          heightMax: "Must be higher than the minimum",
        });
      } else {
        //restablece mensaje de error en ambos campos
        setErrors({
          ...errors,
          heightMax: "",
          heightMin: "",
        });
      }
    }

    //*LIFE_SPAN VALIDATION
    if (e.target.name === "life_spanMin") {
      if (!onlyNumsRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          life_spanMin: "Must be a number",
        });
      } else if (Number(e.target.value) === 0) {
        setErrors({
          ...errors,
          life_spanMin: "Cannot be 0",
        });
      } else if (Number(e.target.value) >= Number(newDog.life_spanMax)) {
        setErrors({
          ...errors,
          life_spanMin: "Must be lower than the maximum",
        });
      } else {
        //restablece mensaje de error en ambos campos
        setErrors({
          ...errors,
          life_spanMin: "",
          life_spanMax: "",
        });
      }
    }

    if (e.target.name === "life_spanMax") {
      if (!onlyNumsRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          life_spanMax: "Must be a number",
        });
      } else if (Number(e.target.value) >= 24) {
        setErrors({
          ...errors,
          life_spanMax: "Must be lower than 24",
        });
      } else if (Number(e.target.value) <= Number(newDog.life_spanMin)) {
        setErrors({
          ...errors,
          life_spanMax: "Must be higher than the minimum",
        });
      } else {
        //restablece mensaje de error en ambos campos
        setErrors({
          ...errors,
          life_spanMax: "",
          life_spanMin: "",
        });
      }
    }

    //*IMAGE VALIDATION
    if (e.target.name === "image") {
      if (!imageRegex.test(e.target.value)) {
        setErrors({
          ...errors,
          image: "Invalid image",
        });
      } else {
        setErrors({
          ...errors,
          image: "",
        });
      }
    }
  };

  //! HANDLERS
  //? actualiza estado de newDog con los valores ingresados en los inputs
  const handleInputChange = (e) => {
    setNewDog({
      ...newDog,
      [e.target.name]: e.target.value,
    });
    validation(e); // valida los valores ingresados para actualiazr los mensajes de error
  };

  const handleInputChangeTemps = (e) => {
    const selectedTemperament = Number(e.target.value); //parsea lo que recibe el input porque agrega el id al array de temperamentos como string

    const updatedTemperaments = [...newDog.temperaments];
    // const indexToRemove = updatedTemperaments.indexOf(selectedTemperament); //? guarda el indice de los temperamentos que se van seleccionando

    //? indexOf retorna -1 si no encuentra el indeice indicado
    // if (indexToRemove !== -1) {
    //   // Si el temperamento ya está seleccionado, lo eliminamos del estado newDog.temperaments
    //   updatedTemperaments.splice(indexToRemove, 1);
    // } else {
      // Si el temperamento no está seleccionado, lo agregamos al estado newDog.temperaments
      updatedTemperaments.push(selectedTemperament);
    // }

    setNewDog({
      ...newDog,
      temperaments: updatedTemperaments,
    });
    
    validation(e);
  };
  
  const handleDeleteTemp = (id) => {
    const filteredDeletedTemps = newDog.temperaments.filter(t => t !== id)
    setNewDog({
      ...newDog,
      temperaments: filteredDeletedTemps
    })
  }

  const capitalizeFirstLetter = (str) => {
    // establecer el nombre con primera letra en mayus y el resto en minus
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  };

  const transformDog = () => {
    return {
      name: capitalizeFirstLetter(newDog.name),
      height: `${newDog.heightMin} - ${newDog.heightMax}`,
      weight: `${newDog.weightMin} - ${newDog.weightMax}`,
      life_span: `${newDog.life_spanMin} - ${newDog.life_spanMax} years`,
      image: newDog.image,
      temperaments: newDog.temperaments,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdDog = transformDog();
    dispatch(createDog(createdDog));
    setNewDog(initialState); //reinicia el formulario despues de crear un perro
    alert(`${capitalizeFirstLetter(newDog.name)} has been created`);
  };
  return {
    newDog,
    errors,
    handleInputChange,
    handleInputChangeTemps,
    handleDeleteTemp,
    handleSubmit
  };
};

export default useCreateValidation;
