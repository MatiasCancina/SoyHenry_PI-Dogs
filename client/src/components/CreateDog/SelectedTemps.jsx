import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SelectedTemps = ({ newDog }) => {
    const temperamentsState = useSelector(state => state.temperaments)
    const [selectedTempsFound, setSelectedTempsFound] = useState([])

    useEffect(() => {
        if (newDog.temperaments) {
            let findSelectedTemps = newDog.temperaments.map(temp => 
                temperamentsState.find(t => (t.id) === (temp))
            )

            setSelectedTempsFound(findSelectedTemps)
        }
    }, [newDog.temperaments, temperamentsState])

    return (
        <div>
            {selectedTempsFound.length > 0 ? (
                <div>
                    <p>Selected Temperaments:</p>
                    {selectedTempsFound.map(temperament => (
                        <p key={temperament.id}>{temperament.name}</p>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default SelectedTemps