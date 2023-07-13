import { useState } from 'react'
import { useDispatch } from 'react-redux'

const useCreateValidation = () => {
    const dispatch = useDispatch();

    const initialState = {
        name: '',
        height: '',
        weight: '',
        life_span: '',
        image: '',
        temperaments: []
    }

    const [newDog, setNewDog] = useState(initialState)
    const [errors, setErrors] = useState(initialState)

    const handleInputChange = (e) => {
        setNewDog({
            ...newDog,
            [e.target.name]: e.target.value
        })
    }

    const handleInputChangeTemps = (e) => {
        setNewDog({
            ...newDog,
            temperaments: [...newDog.temperaments, Number(e.target.value)]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newDog);
    }

    return { newDog, handleInputChange, handleInputChangeTemps, handleSubmit }
}

export default useCreateValidation