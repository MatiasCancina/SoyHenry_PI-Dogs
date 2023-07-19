import { TYPES } from "./actions";

const initialState = {
    dogs: [],
    backupDogs: [],
    temperaments: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case (TYPES.GET_ALL_DOGS):
            return {
                ...state,
                dogs: action.payload,
                backupDogs: action.payload
            }

        case (TYPES.GET_ALL_TEMPS):
            return {
                ...state,
                temperaments: action.payload,
            }

        case (TYPES.GET_DOG_NAME):
            return {
                ...state,
                dogs: action.payload
            }

        //*CREATE
        case (TYPES.CREATE_DOG):
            return {
                ...state,
            }

        //*UPDATE
        case (TYPES.UPDATE_DOG_NAME):
            return {
                ...state
            }

        //*DELETE
        case (TYPES.DELETE_DOG):
            //? filtra la lista de perros actual y la del backup para crear una nueva sin el pero eliminado
            let filterDbDogs = [...state.dogs].filter(
                (dog) => dog.id.toString() !== action.payload
            )
            let filterDeletedBackup = [...state.backupDogs].filter(
                (dog) => dog.id.toString() !== action.payload
            )
            return {
                ...state,
                dogs: filterDbDogs,
                backupDogs: filterDeletedBackup
            }

        //*RESET FILTERS
        case (TYPES.RESET_FILTERS):
            return {
                ...state,
                dogs: state.backupDogs
            }

        //*ORDERS
        case (TYPES.ORDER_BY_NAME):
            const dogsCopy = [...state.dogs];
            let sortedDogs = [];

            if (action.payload === 'A-Z') {
                sortedDogs = dogsCopy.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                sortedDogs = dogsCopy.sort((a, b) => b.name.localeCompare(a.name))
            }

            return {
                ...state,
                dogs: sortedDogs
            }

        case (TYPES.ORDER_BY_WEIGHT): {
            const dogsCopy = [...state.dogs];

            const dogsWeight = dogsCopy.map(dog => {
                let minWeight = null;
                let maxWeight = null;

                if (dog.weight) {
                    const weightArray = dog.weight.split(' - ');
                    if (weightArray.length === 1) {
                        minWeight = maxWeight = parseInt(weightArray[0]);
                    } else if (weightArray.length === 2) {
                        minWeight = parseInt(weightArray[0]);
                        maxWeight = parseInt(weightArray[1]);
                    }
                }

                return {
                    ...dog,
                    minWeight,
                    maxWeight
                };
            }).sort((a, b) => {
                if (isNaN(a.minWeight) || isNaN(b.minWeight)) {
                    return isNaN(a.minWeight) ? 1 : -1;
                } else if (action.payload === 'heavier') {
                    return b.maxWeight - a.maxWeight;   //ordena de forma ascendente teniendo en cuenta el segundo valor de weight
                } else {
                    return a.minWeight - b.minWeight;   //Ordena descendentemente teniendo en cuenta el primer valor de weight
                }
            });

            return {
                ...state,
                dogs: dogsWeight
            };
        }

        //*FILTERS
        case (TYPES.FILTER_BY_ORIGIN):
            const originDogs = state.backupDogs;

            const filterDogs = originDogs.filter(dog => {
                return action.payload === 'API' ? typeof dog.id === 'number' : typeof dog.id !== 'number'
            })

            return {
                ...state,
                dogs: filterDogs
            }

        case (TYPES.FILTER_BY_TEMPS):
            const backupDogsCopy = [...state.backupDogs];

            return {
                ...state,
                dogs: backupDogsCopy.filter(dog => //se fija en la propiedad temperamentos de la DB y de la API para hacer el filter y mostrarlos
                        dog.temperaments ?
                            dog.temperaments.includes(action.payload) :
                            (dog.temperament && dog.temperament.includes(action.payload))
                    )
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;