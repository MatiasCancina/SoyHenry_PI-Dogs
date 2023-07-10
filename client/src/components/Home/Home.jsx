import { useEffect } from 'react';
import { getAllDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import style from './Home.module.css';
import Cards from '../Cards/Cards';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
            <NavBar/>
            <Cards/>
        </div>
    )
}

export default Home;