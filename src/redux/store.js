
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {AllAsteroidIdReducer} from '../redux/reducer/allAsteroidIdReducer'

let store;
if(process.env.NODE_ENV !== "production"){
    const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store= createStore (AllAsteroidIdReducer, composeEnhancer(applyMiddleware(thunk)))

}
else{
    store=createStore(AllAsteroidIdReducer,applyMiddleware(thunk));
}

export default store;