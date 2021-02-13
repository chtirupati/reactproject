import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise';

//Combine -Reducer-Root.name

import rootReducer from '../Reducer/index.js';


let store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

export default store;