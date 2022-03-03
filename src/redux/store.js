import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from 'redux-logger'
// import promise from 'redux-promise-middleware'

const store = createStore(
    rootReducer,
    applyMiddleware(
        
        logger
    )
)

export default store