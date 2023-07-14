import { useDispatch, useSelector } from 'react-redux'
import useCreateValidation from '../../utils/customHooks/useCreateValidation'
import { useEffect } from 'react'
import { getAllTemps } from '../../redux/actions'
import SelectedTemps from './SelectedTemps'

const CreateDog = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)

    const { newDog, errors, handleInputChange, handleInputChangeTemps, handleSubmit } = useCreateValidation()

    useEffect(() => {
        dispatch(getAllTemps())
    }, [])

    const hasErrors = Object.values(errors).some((value) => value !== '');
    const noTemperamentsSelected = newDog.temperaments.length === 0 || newDog.temperaments.length > 12;

    return (
        <form onSubmit={handleSubmit}>
            <label >
                Name:
            </label>
            <input
                type="text"
                name="name"
                value={newDog.name}
                onChange={handleInputChange}
            />
            <p>{errors.name}</p>

            <label>
                Weight Min:
            </label>
            <input
                type="text"
                name='weightMin'
                value={newDog.weightMin}
                onChange={handleInputChange}
            />
            <p>{errors.weightMin}</p>

            <label>
                Weight Max:
            </label>
            <input
                type="text"
                name='weightMax'
                value={newDog.weightMax}
                onChange={handleInputChange}
            />
            <p>{errors.weightMax}</p>

            <label>
                Height Min:
            </label>
            <input
                type="text"
                name='heightMin'
                value={newDog.heightMin}
                onChange={handleInputChange}
            />
            <p>{errors.heightMin}</p>

            <label>
                Height Max:
            </label>
            <input
                type="text"
                name='heightMax'
                value={newDog.heightMax}
                onChange={handleInputChange}
            />
            <p>{errors.heightMax}</p>

            <label>
                Life Span Min:
            </label>
            <input
                type="text"
                name='life_spanMin'
                value={newDog.life_spanMin}
                onChange={handleInputChange}
            />
            <p>{errors.life_spanMin}</p>

            <label>
                Life Span Max:
            </label>
            <input
                type="text"
                name='life_spanMax'
                value={newDog.life_spanMax}
                onChange={handleInputChange}
            />
            <p>{errors.life_spanMax}</p>

            <label>
                Image:
            </label>
            <input
                type="text"
                name='image'
                value={newDog.image}
                onChange={handleInputChange}
            />
            <p>{errors.image}</p>

            <div>
                <label>
                    Temperaments:
                </label>
                {
                    temperaments.length ? (
                        <select defaultValue='ALL' onChange={handleInputChangeTemps}>
                            <option disabled value="ALL">Select Temperaments</option>
                            {temperaments.map(temp => (
                                <option key={temp.id} value={temp.id} name='hola'>{temp.name}</option>
                            ))}

                        </select>

                    ) : null
                }
                <p>{errors.temperaments.length > 0 ? errors.temperaments : ''}</p>

            </div>
            <SelectedTemps newDog={newDog} />

            {!hasErrors && !noTemperamentsSelected && (
                <button
                    type='submit'
                >
                    CREATE
                </button>
            )}
        </form>
    )
}

export default CreateDog