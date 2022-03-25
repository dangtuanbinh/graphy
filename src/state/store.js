import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { compose } from 'redux';

import imageReducer from "./reducers/imageReducer"

const reducer = combineReducers({
    imageReducer,
});

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
);

export default store;