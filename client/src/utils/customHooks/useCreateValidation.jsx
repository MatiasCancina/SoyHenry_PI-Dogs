import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createDog } from '../../redux/actions';

const useCreateValidation = () => {
    const dispatch = useDispatch();

    const initialState = {
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        life_spanMin: '',
        life_spanMax: '',
        image: '',
        temperaments: []
    }

    const [newDog, setNewDog] = useState(initialState)

    const [errors, setErrors] = useState({
        name: '',
        heightMax: '',
        heightMin: '',
        weightMin: '',
        weightMax: '',
        life_spanMin: '',
        life_spanMax: '',
        temperaments: '',
        image: '',
    })

    const validation = (e) => {
        // Expresión regular para validar el nombre 
        const nameRegex = /^[A-Za-z]{3,30}$/;
        // Significado: El nombre debe tener entre 3 y 30 caracteres y solo puede contener letras.

        // Expresión regular para validar la URL de la imagen
        const imageRegex = /^https?:\/\/(?:[a-z]+\.)?[a-z]+\.[a-z]{2,}(?:\/[^\s]*)?\.(?:png|jpe?g|gif|bmp)$/;
        // Significado: La imagen debe ser una URL válida que termine en .png, .jpg, .jpeg o .gif.

        //*NAME VALIDATION
        if (e.target.name === 'name') {
            if (!nameRegex.test(e.target.value)) {
                setErrors({
                    ...errors,
                    name: 'Must be between 3 y 30 letters'
                })
            } else {
                setErrors({
                    ...errors,
                    name: ''
                })
            }
        }

        //*WEIGHT VALIDATION
        if (e.target.name === 'weightMin') {
            if (!/^\d+$/.test(e.target.value)) {
                setErrors({
                    ...errors,
                    weightMin: 'Must be a number'
                })
            } else if (Number(e.target.value) === 0) {
                setErrors({
                    ...errors,
                    weightMin: 'Cannot be 0'
                })
            } else if (Number(e.target.value) >= Number(newDog.weightMax)) {
                setErrors({
                    ...errors,
                    weightMin: 'Must be lower than the maximum'
                })
            } else {
                setErrors({
                    ...errors,
                    weightMin: '',
                    weightMax: ''
                })
            }
        }

        if (e.target.name === 'weightMax') {
            if (!/^\d+$/.test(e.target.value)) {
                setErrors({
                    ...errors,
                    weightMax: 'Must be a number'
                })
            } else if (Number(e.target.value) >= 98) {
                setErrors({
                    ...errors,
                    weightMax: 'Must be lower than 98'
                })
            } else if (Number(e.target.value) <= Number(newDog.weightMin)) {
                setErrors({
                    ...errors,
                    weightMax: 'Must be higher than the minimum'
                })
            } else {
                setErrors({
                    ...errors,
                    weightMax: '',
                    weightMin: ''
                })
            }
        }

        //*HEIGHT VALIDATION
        if (e.target.name === 'heightMin') {
            if (!/^\d+$/.test(e.target.value)) {
                setErrors({
                    ...errors,
                    heightMin: 'Must be a number'
                })
            } else if (Number(e.target.value) <= 8) {
                setErrors({
                    ...errors,
                    heightMin: 'Must be higher than 8'
                })
            } else if (Number(e.target.value) >= Number(newDog.heightMax)) {
                setErrors({
                    ...errors,
                    heightMin: 'Must be lower than the maximum'
                })
            } else {
                setErrors({
                    ...errors,
                    heightMin: '',
                    heightMax: ''
                })
            }
        }

        if (e.target.name === 'heightMax') {
            if (!/^\d+$/.test(e.target.value)) {
                setErrors({
                    ...errors,
                    heightMax: 'Must be a number'
                })
            } else if (Number(e.target.value) >= 147) {
                setErrors({
                    ...errors,
                    heightMax: 'Must be lower than 147'
                })
            } else if (Number(e.target.value) <= Number(newDog.heightMin)) {
                setErrors({
                    ...errors,
                    heightMax: 'Must be higher than the minimum'
                })
            } else {
                setErrors({
                    ...errors,
                    heightMax: '',
                    heightMin: ''
                })
            }
        }

        //*LIFE_SPAN VALIDATION
        if (e.target.name === 'life_spanMin') {
            if (!/^\d+$/.test(e.target.value)) {
                setErrors({
                    ...errors,
                    life_spanMin: 'Must be a number'
                })
            } else if (Number(e.target.value) === 0) {
                setErrors({
                    ...errors,
                    life_spanMin: 'Cannot be 0'
                })
            } else if (Number(e.target.value) >= Number(newDog.life_spanMax)) {
                setErrors({
                    ...errors,
                    life_spanMin: 'Must be lower than the maximum'
                })
            } else {
                setErrors({
                    ...errors,
                    life_spanMin: '',
                    life_spanMax: ''
                })
            }
        }

        if (e.target.name === 'life_spanMax') {
            if (!/^\d+$/.test(e.target.value)) {
                setErrors({
                    ...errors,
                    life_spanMax: 'Must be a number'
                })
            } else if (Number(e.target.value) >= 24) {
                setErrors({
                    ...errors,
                    life_spanMax: 'Must be lower than 24'
                })
            } else if (Number(e.target.value) <= Number(newDog.life_spanMin)) {
                setErrors({
                    ...errors,
                    life_spanMax: 'Must be higher than the minimum'
                })
            } else {
                setErrors({
                    ...errors,
                    life_spanMax: '',
                    life_spanMin: ''
                })
            }
        }

        //*IMAGE VALIDATION
        if (e.target.name === 'image') {
            if (!imageRegex.test(e.target.value)) {
                setErrors({
                    ...errors,
                    image: 'Invalid image'
                })
            }
            else {
                setErrors({
                    ...errors,
                    image: ''
                })
            }
        }

        //*TEMPERAMENTS VALIDATION
        if (e.target.name === 'hola') {
            console.log('entre');
            const selectedTemperaments = [...newDog.temperaments, Number(e.target.value)];

            if (selectedTemperaments.length >= 1 && selectedTemperaments.length <= 12) {
                setErrors({
                  ...errors,
                  temperaments: '',
                });
              } else {
                setErrors({
                  ...errors,
                  temperaments: 'Select between 1 and 12 temperaments',
                });
              }
        }
    }


    //! HANDLERS
    const handleInputChange = (e) => {
        setNewDog({
            ...newDog,
            [e.target.name]: e.target.value
        })
        validation(e)
    }

    const handleInputChangeTemps = (e) => {
        const selectedTemperament = Number(e.target.value);

        if (newDog.temperaments.includes(selectedTemperament)) {
            setNewDog({
                ...newDog,
                temperaments: newDog.temperaments.filter(temp => temp !== selectedTemperament)
            })
        } else {
            setNewDog({
                ...newDog,
                temperaments: [...newDog.temperaments, selectedTemperament]
            })
        }
        validation(e);
    }

    const transformDog = () => {
        return {
            name: newDog.name.replace(/^\w/, (c) => c.toUpperCase()),
            height: `${newDog.heightMin} - ${newDog.heightMax}`,
            weight: `${newDog.weightMin} - ${newDog.weightMax}`,
            life_span: `${newDog.life_spanMin} - ${newDog.life_spanMax} years`,
            image: newDog.image,
            temperaments: newDog.temperaments
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const createdDog = transformDog();
        dispatch(createDog(createdDog));
        setNewDog(initialState);
        alert('The dog has been created');
    }
    return { newDog, errors, handleInputChange, handleInputChangeTemps, handleSubmit }
}

export default useCreateValidation