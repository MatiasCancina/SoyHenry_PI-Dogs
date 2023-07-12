import React from 'react'
import { useDispatch } from 'react-redux'
import { filterbyOrigin } from '../../redux/actions'

const Filters = () => {
    const dispatch = useDispatch()

    const handleFilter = (e) => {
        dispatch(filterbyOrigin(e.target.value))
    }

    return (
        <div>
            <select onChange={handleFilter}>
                <option disabled selected value="">API | DB</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>
        </div>
    )
}

export default Filters