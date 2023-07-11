import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import style from './Details.module.css';

const Details = () => {

    const { id } = useParams();
    const [dog, setDog] = useState({})

    const urlCall = async () => {
        const { data } = await axios(`http://localhost:8080/dogs/${id}`)
        setDog(data)
    }

    useEffect(() => {
        urlCall()
    }, []);

    const tempResult = dog.temperament
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
                        <h3>TEMPERAMENTS | {tempResult}</h3>
                        <h4>{dog.id}</h4>

                    </div>
                    <div className={style.imgContainer}>
                        <img className={style.imageCharacter} src={dog.image} alt={dog.name} />
                    </div>
                </div >)
                : <p>loading</p>
            }
        </>
    )
}

export default Details