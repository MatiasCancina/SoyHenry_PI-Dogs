import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SelectedTemps = ({ newDog }) => {  // recibe por props el perro que se esta creando   
  const temperamentsState = useSelector((state) => state.temperaments);
  const [selectedTempsFound, setSelectedTempsFound] = useState([]);

  useEffect(() => {
    if (newDog.temperaments) {
      let findSelectedTemps = newDog.temperaments.map((temp) =>
        temperamentsState.find((t) => t.id === temp)    //? compara el id de los del estado global con el temp que se recibe de los del perro a crear
      );                                                //? porque en newDog.temperaments se guardan los id de los temperamentos

      setSelectedTempsFound(findSelectedTemps); //guarda los temperamentos que coincidan con los seleccionados entre los del estado global 
    }
  }, [newDog.temperaments, temperamentsState]);

  return (
    <div>
      {selectedTempsFound.length > 0 ? (
        <div>
          {selectedTempsFound.map((temperament) => (
            <p key={temperament.id}>{temperament.name}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SelectedTemps;
