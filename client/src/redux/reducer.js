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

        case()

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