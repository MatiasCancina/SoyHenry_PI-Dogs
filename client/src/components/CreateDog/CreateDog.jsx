import { useDispatch, useSelector } from "react-redux";
import useCreateValidation from "../../utils/customHooks/useCreateValidation";
import { useEffect } from "react";
import { getAllTemps } from "../../redux/actions";
import SelectedTemps from "./SelectedTemps/SelectedTemps";
import Loader from "../Loader/Loader";
import style from "./CreateDog.module.css";

const CreateDog = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const {
    newDog,
    errors,
    handleInputChange,
    handleInputChangeTemps,
    handleDeleteTemp,
    handleSubmit,
  } = useCreateValidation();

  useEffect(() => {
    dispatch(getAllTemps());
  }, [dispatch]);

  const hasErrors = Object.values(errors).some((value) => value !== ""); //? almacena los errores que vienen del hook de validation
  const noTemperamentsSelected =
    newDog.temperaments.length === 0 || newDog.temperaments.length > 4; //? validacion de cant de temps

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        
        <h1 className={style.titl}>CREATE YOUR DOG</h1>

        <label className={style.titles}>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Firulais"
          value={newDog.name}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.name}</p>

        <label className={style.titles}>Weight Min:</label>
        <input
          type="text"
          name="weightMin"
          placeholder="Enter minimum weight"
          value={newDog.weightMin}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.weightMin}</p>

        <label className={style.titles}>Weight Max:</label>
        <input
          type="text"
          name="weightMax"
          placeholder="Enter maximum weight"
          value={newDog.weightMax}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.weightMax}</p>

        <label className={style.titles}>Height Min:</label>
        <input
          type="text"
          name="heightMin"
          placeholder="Enter minimum height"
          value={newDog.heightMin}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.heightMin}</p>

        <label className={style.titles}>Height Max:</label>
        <input
          type="text"
          name="heightMax"
          placeholder="Enter maximum height"
          value={newDog.heightMax}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.heightMax}</p>

        <label className={style.titles}>Life Span Min:</label>
        <input
          type="text"
          name="life_spanMin"
          placeholder="Enter minimum life span"
          value={newDog.life_spanMin}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.life_spanMin}</p>

        <label className={style.titles}>Life Span Max:</label>
        <input
          type="text"
          name="life_spanMax"
          placeholder="Enter maximum life span"
          value={newDog.life_spanMax}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.life_spanMax}</p>

        <label className={style.titles}>Image:</label>
        <input
          type="text"
          name="image"
          placeholder="URL image"
          value={newDog.image}
          onChange={handleInputChange}
          className={style.inputContainers}
        />
        <p className={style.errors}>{errors.image}</p>

        <div>
          <label className={style.titles}>Temperaments:</label>

          {temperaments.length ? (
            <select defaultValue="ALL" onChange={handleInputChangeTemps}>

              <option disabled value="ALL">
                Select Temperaments
              </option>

              {temperaments.map((temp) => (
                <option key={temp.id} value={temp.id} name="hola">
                  {temp.name}
                </option>
              ))}

            </select>
          ) : <Loader/>}
        </div>
        <SelectedTemps newDog={newDog} handleDeleteTemp={handleDeleteTemp}/>
        
        <div className={style.submitContainer}>
          {!hasErrors &&
            !noTemperamentsSelected && ( //? renderiza el btn si no hay errores y estan la cant definida de temps
              <button type="submit" className={style.submitBtn}>
                CREATE
              </button>
            )}
        </div>
      </form>
    </div>
  );
};

export default CreateDog;
