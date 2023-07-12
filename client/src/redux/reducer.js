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

        case (TYPES.ORDER_BY_NAME):
            const dogsCopy = [...state.dogs];
            let sortedDogs = [];

            // const ascendant = dogsCopy.sort((a, b) => a.name.localeCompare(b.name))
            // const descendant = dogsCopy.sort((a, b) => b.name.localeCompare(a.name))

            if (action.payload === 'A-Z') {
                sortedDogs = dogsCopy.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                sortedDogs = dogsCopy.sort((a, b) => b.name.localeCompare(a.name))
            }

            return {
                ...state,
                dogs: sortedDogs
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;