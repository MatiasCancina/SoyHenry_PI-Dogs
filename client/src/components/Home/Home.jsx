import { useEffect } from 'react';
import { getAllDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import Cards from '../Cards/Cards';
import { usePagination } from '../../utils/customHooks/usePagination';
import Pagination from '../Pagination/Pagination';
import style from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const { dogs, count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler } = usePagination()

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
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