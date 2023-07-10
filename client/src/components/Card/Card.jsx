import { useSelector } from 'react-redux';
import style from './Card.module.css';

const Card = () => {
    const dogs = useSelector(state => state.dogs)

    return (
        <div >
            {
                dogs.length
                    ? dogs?.map(dog =>
                        <div className={style.cardContainer} key={dog.id}>
                            <h1>{dog.name}</h1>
                            <img src={dog.image} alt={dog.name} />
                            <p>Weight: {dog.weight}</p>
                            <p>Height: {dog.height}</p>
                        </div>
                    )
                    : <p>LOADING</p>
            }
        </div>
    )
}

export default Card;