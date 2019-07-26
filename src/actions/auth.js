import axios from 'axios';

import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, GETME_FAIL, GETME_SUCCESS, LOGOUT_SUCCESS }
    from './../constants/actionTypes'

const baseUrl = 'http://192.168.10.10:4040';
// syedmujtaba_31@outlook.com 1234567xyz 


export function _Signup(body) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            axios.post(baseUrl + `/auth/sign-up`, body)
                .then(res => {
                    // console.log(res.data.data);
                    dispatch({
                        type: SIGNUP_SUCCESS,
                        data: res.data.data
                    });

                    resolve(res.data)
                })
                .catch(error => {
                    console.log("Error ", error)
                    dispatch({
                        type: SIGNUP_FAIL,
                        data: error
                    });
                    reject(error);
                })
        })
    }
}

export function _Login(body) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            axios.post(baseUrl + `/auth/login`, body)
                .then(res => {
                    // console.log(res.data.data)
                    dispatch({
                        type: LOGIN_SUCCESS,
                        data: res.data.data
                    });
                    resolve(res.data)
                })
                .catch(error => {
                    console.log("Error ", error)
                    dispatch({
                        type: LOGIN_FAIL,
                        data: error
                    });
                    reject(error);
                })
        })
    }
}
export function _getMe() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            const jwt = localStorage.getItem('jwt');
            const config = {
                headers: {
                    'access-token': jwt
                }
            }
            axios.get(baseUrl + `/auth/me`, config)
                .then(res => {
                    // console.log(res.data.data)
                    dispatch({
                        type: GETME_SUCCESS,
                        data: res.data.data,
                    });
                    resolve(res.data)
                })
                .catch(error => {
                    console.log("Error ", error)
                    dispatch({
                        type: GETME_FAIL,
                        data: error
                    });
                    reject(error);
                })
        })
    }

}

export function _onLogout() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
                dispatch({
                    type:LOGOUT_SUCCESS,
                    data:null,
                });
                resolve(true)
        })
    }

} 