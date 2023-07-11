import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import style from './Details.module.css';
import Loader from '../Loader/Loader';

const Details = () => {
    const { id } = useParams();
    const [dog, setDog] = useState({})

    const urlCall = async () => {   //?hago el fecth aparte para que no me salten errores en el useEffect
        const { data } = await axios(`http://localhost:8080/dogs/${id}`)
        setDog(data)
    }

    useEffect(() => {
        urlCall()
    }, []);

    const apiAndDbTemps = dog.temperament  //mismo bloque que en Card
        ? dog.temperament
        : (
            dog.temperaments
            && dog.temperaments
        )

    return (
        <>
            {dog ?
                (<div className={style.detailsContainer} key={dog.id} >
                    <div className={style.info}>
                        <h1>{dog.name}</h1>
                        <h3>WEIGHT | {dog.weight}</h3>
                        <h3>HEIGHT | {dog.height}</h3>
                        <h3>LIFE SPAN | {dog.life_span}</h3>
                        <h3>TEMPERAMENTS | {apiAndDbTemps}</h3>
                        <h4>{dog.id}</h4>
                    </div>
                    <div className={style.imgContainer}>
                        <img className={style.imageCharacter} src={dog.image} alt={dog.name} />
                    </div>
                </div >)
                : <Loader />
            }
        </>
    )
}

export default Details