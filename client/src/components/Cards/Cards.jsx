import { Card } from '../Card/Card';
import Loader from '../Loader/Loader';
import style from './Cards.module.css';

const Cards = ({dogs}) => {

    return (
        <div>
            <div className={style.cardsContainer}>
                {
                    dogs.length
                        ? dogs?.map(dog =>
                            <Card key={dog.id} dog={dog} />
                        )
                        : <Loader/>
                }
            </div>
        </div>
    )
}

export default Cards;