import { useEffect } from 'react';
import { getAllDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import Cards from '../Cards/Cards';
import { usePagination } from '../../utils/customHooks/usePagination';
import Pagination from '../Pagination/Pagination';
import Orders from '../FiltersAndOrders/Orders/Orders';
import Filters from '../FiltersAndOrders/Filters/Filters';
import style from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const { dogs, count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler } = usePagination()    //destructuring de lo que voy a usar del hook de Pagination

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
            <div className={style.filtersAndOrders}>
                <Orders />
                <Filters />
            </div>

            <Cards dogs={dogs} />
            <Pagination
                count={count}
                totalPages={totalPages}
                nextHandler={nextHandler}
                prevHandler={prevHandler}
                firstPageHandler={firstPageHandler}
                lastPageHandler={lastPageHandler}
            />
        </div>
    )
}

export default Home;