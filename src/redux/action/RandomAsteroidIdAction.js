import {getAllRandomAsteroidIdServices} from '../../services/getAllRandomAsteroidIdServices';

export const RandomAsteroidIdAction =()=>{
    return async (dispatch)=>{
        const details= await getAllRandomAsteroidIdServices ()
        return details.data;
       
    }
}