import { TYPES } from "./actions";

const initialState = {
    dogs: [],
    backupDogs: [],
    temperaments: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case(TYPES.GET_ALL_DOGS):
        return {
            ...state,
            dogs: action.payload,
            backupDogs: action.payload
        }

        case(TYPES.GET_DOG_NAME):
        return {
            ...state,
            dogs: action.payload
        }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;