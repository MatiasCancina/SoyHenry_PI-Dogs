import { Card } from '../Card/Card';
import Loader from '../Loader/Loader';
import style from './Cards.module.css';

const Cards = ({ dogs }) => {   //?recibe dogs por props de Home 

    return (
        <div>
            <div className={style.cardsContainer}>
                {
                    dogs.length //verifica que realmente este trayendo algo por props
                        ? dogs?.map(dog =>
                            <Card key={dog.id} dog={dog} /> //?pasa dog por props para poder acceder a las propiedades del obj
                        )
                        : <Loader />
                }
            </div>
        </div>
    )
}

export default Cards;