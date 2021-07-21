import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import sessionReducer from './session';
import { loginModalReducer, signupModalReducer, deleteListingModalReducer } from "./modals";
import { imageViewerReducer } from "./imageViewer";

const rootReducer = combineReducers({
    session: sessionReducer,
    loginModal: loginModalReducer,
    signupModal: signupModalReducer,
    imageViewer: imageViewerReducer,
    deleteListingModal: deleteListingModalReducer,
});

let enhancer;

if(process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;