import { useDispatch, useSelector } from 'react-redux'
import useCreateValidation from '../../utils/customHooks/useCreateValidation'
import { useEffect } from 'react'
import { getAllTemps } from '../../redux/actions'
import SelectedTemps from './SelectedTemps'

const CreateDog = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)

    const { newDog, handleInputChange, handleInputChangeTemps, handleSubmit } = useCreateValidation()

    useEffect(() => {
        dispatch(getAllTemps())
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <label >
                Name:
                <input
                    type="text"
                    name="name"
                    value={newDog.name}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Height:
                <input
                    type="text"
                    name='height'
                    value={newDog.height}
                    onChange={handleInputChange} />
            </label>
            <label>
                Weight:
                <input
                    type="text"
                    name='weight'
                    value={newDog.weight}
                    onChange={handleInputChange} />
            </label>
            <label>
                Life Span:
                <input
                    type="text"
                    name='life_span'
                    value={newDog.life_span}
                    onChange={handleInputChange} />
            </label>
            <label>
                Image:
                <input
                    type="text"
                    name='image'
                    value={newDog.image}
                    onChange={handleInputChange} />
            </label>
            <div>

                <label>
                    Temperaments:
                </label>
                {
                    temperaments.length ? (
                        <select defaultValue='ALL' onChange={handleInputChangeTemps}>
                            <option disabled value="ALL">Select Temperaments</option>
                            {temperaments.map(temp => (
                                <option key={temp.id} value={temp.id}>{temp.name}</option>
                            ))}

                        </select>
                    ) : null
                }
                    </div>
            <button type='submit'>CREAT</button>
            <SelectedTemps newDog={newDog}/>
        </form>
    )
}

export default CreateDog