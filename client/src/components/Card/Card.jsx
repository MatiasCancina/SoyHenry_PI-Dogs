import { useNavigate } from 'react-router-dom';
import style from './Card.module.css';

export const Card = ({ dog }) => {  //? recibe dog por props de Cards
    const navigate = useNavigate()

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
            <h1>{dog.name}</h1>
            <img onClick={navigateHandler} className={style.image} src={dog.image} alt={dog.name} />
            <div className={style.dogInfo}>
                <p>Weight: {dog.weight}</p>
                <p>Temperaments: {apiAndDbTemps}</p>
            </div>
        </div>
    )
}