import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Loader from "../Loader/Loader";
import { updateDogName } from "../../redux/actions";
import style from "./Details.module.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dog, setDog] = useState({});
  const [newName, setNewName] = useState(""); // Estado local para el nuevo nombre
  const [editName, setEditName] = useState(false) //estado local para el renderizado del input para actualziar el name

  const urlCall = async () => {
    const { data } = await axios(`http://localhost:8080/dogs/${id}`);
    setDog(data);
  };

  useEffect(() => {
    urlCall();
  }, []);

  const apiAndDbTemps = dog.temperament
    ? dog.temperament
    : dog.temperaments && dog.temperaments;

  const apiAndDbTempsSeparated = apiAndDbTemps?.split(",").join(" || ");

  const handleUpdateName = async () => {
    try {
      // Actualizamos el nombre localmente sin esperar a la respuesta de la API
      setDog((prevDog) => ({  //prevDog es una referencia al estado local de dog
        ...prevDog,
        name: newName,
      }));

      // Llamamos a la acción para actualizar el nombre en el servidor
      await dispatch(updateDogName(id, newName));
      setEditName(false)

      // Realizamos una nueva llamada a la API para obtener el objeto actualizado
      await urlCall();
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      {dog ? (
        <div className={style.detailsContainer} key={dog.id}>
          <div className={style.info}>
            {isNaN(dog.id) ?
              (editName ? (
                <div className={style.editNameContainer}>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter new name"
                    className={style.editNameInput}
                  />
                  <button onClick={handleUpdateName} className={style.updateBtn}>Update Name</button>
                </div>
              ) :
                <div className={style.nameContainer}>
                  <h1 className={style.name}>{dog.name}</h1>
                  <button onClick={() => { setEditName(true) }} className={style.editBtn}>Edit Name</button>
                </div>
              ) :
              <h1 className={style.name}>{dog.name}</h1>
            }
            <h3>WEIGHT | {dog.weight}</h3>
            <h3>HEIGHT | {dog.height}</h3>
            <h3>LIFE SPAN | {dog.life_span}</h3>
            <h2 className={style.temperamentsTitle}>TEMPERAMENTS</h2>
            <h5 className={style.temps}>{apiAndDbTempsSeparated}</h5>
            <h4>{dog.id}</h4>
          </div>
          <div className={style.imgContainer}>
            <img
              className={style.imageCharacter}
              src={dog.image}
              alt={dog.name}
            />
          </div>
        </div>
      ) : <Loader />
      }
    </>
  );
};

export default Details;
