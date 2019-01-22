import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    namaku: () => 'Jamal',
    auth: AuthReducer
})