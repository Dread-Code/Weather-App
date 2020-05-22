import { combineReducers } from 'redux';
import {city} from '../reducers/city';
import {cities} from '../reducers/cities';

export default combineReducers({
    cities,
    city
});