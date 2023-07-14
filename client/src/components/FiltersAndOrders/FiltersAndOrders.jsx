import Orders from './Orders/Orders'
import Filters from './Filters/Filters'
import { useDispatch } from 'react-redux'
import { resetFilters } from '../../redux/actions'
import style from './FiltersAndOrders.module.css';
import useFiltersState from '../../utils/customHooks/useFiltersState';

const FiltersAndOrders = () => {
  const dispatch = useDispatch();
  const { resetFilter } = useFiltersState()

  const handleReset = () => {
    resetFilter()
    dispatch(resetFilters())
  }

  return (
    <div className={style.filtersAndOrdersContainer}>
      <Filters />
      <Orders />
      <button className={style.resetBtn} onClick={handleReset}>RESET</button>
    </div>
  )
}

export default FiltersAndOrders