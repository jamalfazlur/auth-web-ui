import axios from 'axios';
import {
    USER_LOGIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING
} from './types';

export const onUserRegister = ({ username, email, phone, password}) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING });

        if(username === '' || email === '' || phone === '' || password === ''){
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Semua form di atas wajib diisi !'})
        } else {
         
            axios.post(`http://localhost:1991/auth/register`, { 
                username, email, password, phone 
            }).then((res) => {
                console.log(res);
                if(res.data.status === 'error'){
                    dispatch({type: AUTH_SYSTEM_ERROR, payload: res.data.message})
                }
                else{
                    dispatch({type: USER_LOGIN_SUCCESS, payload: res.data})
                }                
            }).catch((err)=> {
                console.log(err);
                dispatch({type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
            })
            
        }
        
    }
}

export const onUserVerified = (userData) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: userData
    }
}