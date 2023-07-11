import { Card } from '../Card/Card';
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
                        : <p>LOADING</p>
                }
            </div>
        </div>
    )
}

export default Cards;