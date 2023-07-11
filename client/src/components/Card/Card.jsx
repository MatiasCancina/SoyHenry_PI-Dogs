import { useNavigate } from 'react-router-dom';
import style from './Card.module.css';

export const Card = ({ dog }) => {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate(`/details/${dog.id}`);
    }

    const apiAndDbTemps = dog.temperament
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
