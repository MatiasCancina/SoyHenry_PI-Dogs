import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import style from './Cards.module.css';

const Cards = () => {
    const dogs = useSelector(state => state.dogs)

    return (
        <div className={style.cardsContainer}>  
            {
                dogs.length
                    ? dogs?.map(dog =>
                        <Card dog={dog}/>
                    )
                    : <p>LOADING</p>
            }
        </div>
    )
}

export default Cards;