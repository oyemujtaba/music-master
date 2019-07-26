import axios from 'axios';

import {
     GET_ARTIST_SUCCESS, GET_ARTIST_FAIL
} from './../constants/actionTypes';
// import { resolve } from 'path';

const baseUrl = 'https://spotify-api-wrapper.appspot.com';

export function getArtist(query) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            axios.get(baseUrl + `/artist/${query}`)
                .then(res => {
                    console.log("Data",res)
                    if(res.data.artists.items.length > 0){
                        dispatch({
                            type: GET_ARTIST_SUCCESS,
                            data: res.data
                        });
                    }else{
                        dispatch({
                            type: GET_ARTIST_FAIL,
                            data: {}
                        });
                    }
                    // console.log(res)
                   
                    resolve(res.data);
                })
                .catch(error => {   
                    console.log("Error ",error)
                    dispatch({
                        type: GET_ARTIST_FAIL,
                        data: error
                    });
                  
                    reject(error);
                })
        })
    }
}
// export function example(query) {
//     return function (dispatch) {
//         return new Promise(function (resolve, reject) {
//             axios.get(baseUrl + `/artist/${query}`)
//                 .then(res => {
//                     // console.log(res)
//                     dispatch({
//                         type: GET_ARTIST_SUCCESS,
//                         data: res.data
//                     });
//                     resolve(res.data);
//                 })
//                 .catch(error => {
//                     dispatch({
//                         type: GET_ARTIST_FAIL,
//                         data: error
//                     });
//                     reject(error);
//                 })
//         })
//     }
// }
