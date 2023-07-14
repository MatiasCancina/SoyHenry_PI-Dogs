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
            {
                temperaments.length ? (
                    <select onChange={handleFilterByTemp}>
                        <option value="original">ALL TEMPERAMENTS</option>
                        {temperaments.map(temp => (
                            <option key={temp.id} value={temp.name}>{temp.name}</option>
                        ))}
                    </select>
                ) : null
            }

            <select onChange={handleFilterByOrigin}>
                <option value="original">API | DB</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>
        </div>
    )
}

export default Filters