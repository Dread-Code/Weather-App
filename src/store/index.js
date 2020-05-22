
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers'
import thunk from 'redux-thunk';

const initialState = {
  city: 'Medellin'
};


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers,initialState, composeEnhancer(applyMiddleware(thunk)));
