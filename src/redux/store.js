import {createStore,applyMiddleware, compose} from "redux"
import rootReduce from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReduce,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    
    
    );


export default store;