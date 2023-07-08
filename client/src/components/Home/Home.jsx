import { useEffect } from 'react';
import { getAllDogs } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './Home.module.css';

const Home = () => {
    const dogs = useSelector(state => state.dogs)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
            {
                dogs.length
                    ? dogs?.map(dog => <p>{dog.name}</p>)
                    : <p>loading</p>
            }
        </div>
    )
}

export default Home;