import { ASTEROID_ID, GET_ALL_API } from "../action/actionType"

const initialState = {

}

export const AllAsteroidIdReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case ASTEROID_ID:
        return { 
            ...state, 
            ...payload,
         }
         case GET_ALL_API:
            return { 
                ...state, 
                ...payload,
             }

    default:
        return state
    }
}
