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

        case (TYPES.GET_DOG_NAME):
            return {
                ...state,
                dogs: action.payload
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
                    return b.maxWeight - a.maxWeight;
                } else {
                    return a.minWeight - b.minWeight;
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

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;