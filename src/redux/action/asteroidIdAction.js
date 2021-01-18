import {ASTEROID_ID} from './actionType';
import {getAllAsteroidIdServices} from '../../services/getAllAsteroidIdServices';

export const AsteroidIdAction =(id)=>{
    return async (dispatch)=>{
        const details= await getAllAsteroidIdServices (id)
        dispatch({
            type:ASTEROID_ID,
            payload:details.data,
        })
    }
}