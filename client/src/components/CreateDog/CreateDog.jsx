import { useDispatch, useSelector } from 'react-redux'
import useCreateValidation from '../../utils/customHooks/useCreateValidation'
import { useEffect } from 'react'
import { getAllTemps } from '../../redux/actions'
import SelectedTemps from './SelectedTemps'
import style from './CreateDog.module.css';

const CreateDog = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)

    const { newDog, errors, handleInputChange, handleInputChangeTemps, handleSubmit } = useCreateValidation()

    useEffect(() => {
        dispatch(getAllTemps())
    }, [dispatch])

    const hasErrors = Object.values(errors).some((value) => value !== '');
    const noTemperamentsSelected = newDog.temperaments.length === 0 || newDog.temperaments.length > 12;

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.formContainer}>
                <h1 className={style.titl}>CREATE YOUR DOG</h1>
                <label className={style.titles}>
                    Name:
                </label>
                <input
                    type="text"
                    name="name"
                    value={newDog.name}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.name}</p>

                <label className={style.titles}>
                    Weight Min:
                </label>
                <input
                    type="text"
                    name='weightMin'
                    value={newDog.weightMin}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.weightMin}</p>

                <label className={style.titles}>
                    Weight Max:
                </label>
                <input
                    type="text"
                    name='weightMax'
                    value={newDog.weightMax}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.weightMax}</p>

                <label className={style.titles}>
                    Height Min:
                </label>
                <input
                    type="text"
                    name='heightMin'
                    value={newDog.heightMin}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.heightMin}</p>

                <label className={style.titles}>
                    Height Max:
                </label>
                <input
                    type="text"
                    name='heightMax'
                    value={newDog.heightMax}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.heightMax}</p>

                <label className={style.titles}>
                    Life Span Min:
                </label>
                <input
                    type="text"
                    name='life_spanMin'
                    value={newDog.life_spanMin}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.life_spanMin}</p>

                <label className={style.titles}>
                    Life Span Max:
                </label>
                <input
                    type="text"
                    name='life_spanMax'
                    value={newDog.life_spanMax}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.life_spanMax}</p>

                <label className={style.titles}>
                    Image:
                </label>
                <input
                    type="text"
                    name='image'
                    value={newDog.image}
                    onChange={handleInputChange}
                    className={style.inputContainers}
                />
                <p className={style.errors}>{errors.image}</p>

                <div>
                    <label className={style.titles}>
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
                    <p className={style.errors}>{errors.temperaments.length > 0 ? errors.temperaments : ''}</p>

                </div>
                <SelectedTemps newDog={newDog} />
                <div className={style.submitContainer}>
                    {!hasErrors && !noTemperamentsSelected && (
                        <button
                            type='submit'
                            className={style.submitBtn}
                        >
                            CREATE
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default CreateDog