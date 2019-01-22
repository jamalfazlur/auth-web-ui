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
            axios.get(`${KONEKSI}/users`, {
                params: {
                    username
                }
            }).then((res) =>{
                if(res.data.length === 0){
                    axios.post(`${KONEKSI}/users`, { username, email, password, phone 
                    }).then((res) => {
                        console.log(res);
                        dispatch({type: USER_LOGIN_SUCCESS, payload: {email, username}})
                    }).catch((err)=> {
                        console.log(err);
                        dispatch({type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
                    })
                } else {
                    dispatch({type: AUTH_SYSTEM_ERROR, payload: 'Username has been taken !'})
                }
                 
            }).catch((err) => {
                console.log(err);
                dispatch({type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
            })

            
        }
        
    }
}