import Orders from './Orders/Orders'
import Filters from './Filters/Filters'
import { useDispatch } from 'react-redux'
import { resetFilters } from '../../redux/actions'
import style from './FiltersAndOrders.module.css';

const FiltersAndOrders = () => {
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetFilters())
    }
    
  return (
    <div className={style.filtersAndOrdersContainer}>
        <Orders/>
        <Filters/>
        <button className={style.resetBtn} onClick={handleReset}>RESET</button>
    </div>
  )
}

export default FiltersAndOrders