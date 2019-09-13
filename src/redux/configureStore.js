import { createStore, applyMiddleware, compose } from "redux";
import penderMiddleware from "redux-pender";
import modules from "redux/modules";

const isDevelopment = process.env.NODE_ENV === "development";
const composeEnhancers = isDevelopment? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
const midleware = [penderMiddleware()];

if(isDevelopment){
    const { logger } = require("redux-logger");
    midleware.push(logger);
}

const configureStore = () => {
    const store = createStore(modules, composeEnhancers(
            applyMiddleware(...midleware)
        ));
            return store;
}

export default configureStore;
