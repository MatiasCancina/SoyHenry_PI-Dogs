import { useNavigate } from 'react-router-dom';
import style from './Card.module.css';
import { useDispatch } from 'react-redux';
import { deleteDbDogs } from './deleteDbDog';

export const Card = ({ dog }) => {  //? recibe dog por props de Cards
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateHandler = () => {
        navigate(`/details/${dog.id}`);
    }

    const apiAndDbTemps = dog.temperament   //?guardo en la const un condicional para renderizar los temperamentos tanto de la api como la db
        ? dog.temperament
        : (
            dog.temperaments
            && dog.temperaments
        )

    return (
        <div className={style.cardContainer} key={dog.id}>
            {isNaN(Number(dog.id)) &&
                <button onClick={() => {deleteDbDogs(dog.id, dispatch)}}>x</button>
            }

            <h1>{dog.name}</h1>
            <img onClick={navigateHandler} className={style.image} src={dog.image} alt={dog.name} />
            <div className={style.dogInfo}>
                <p>Weight: {dog.weight}</p>
                <h4>Temperaments:</h4>
                <p>{apiAndDbTemps}</p>
            </div>
        </div>
    )
}