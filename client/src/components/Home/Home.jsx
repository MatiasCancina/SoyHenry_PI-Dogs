import { useEffect } from 'react';
import { getAllDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import style from './Home.module.css';
import Card from '../Card/Card';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
            <Card/>
        </div>
    )
}

export default Home;