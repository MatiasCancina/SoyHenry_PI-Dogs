import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterbyOrigin, filterbyTemps } from '../../../redux/actions'

const Filters = () => {
    const temperaments = useSelector(state => state.temperaments)

    const dispatch = useDispatch()

    const handleFilterByOrigin = (e) => {
        dispatch(filterbyOrigin(e.target.value))
    }

    const handleFilterByTemp = (e) => {
        dispatch(filterbyTemps(e.target.value))
    }

    return (
        <div>
            <select onChange={handleFilterByOrigin}>
                <option disabled selected value="">API | DB</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>

            {
                temperaments.length ? (
                    <select onChange={handleFilterByTemp}>
                        <option disabled selected value="">TEMPERAMENTS</option>
                        <option value="ALL">ALL</option>
                        {temperaments.map(temp => (
                            <option key={temp.id} value={temp.name}>{temp.name}</option>
                        ))}
                    </select>
                ) : null
            }
        </div>
    )
}

export default Filters