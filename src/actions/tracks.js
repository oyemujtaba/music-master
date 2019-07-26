import axios from 'axios';
import {
    GET_ARTIST_TOP_TRACKS
} from './../constants/actionTypes';

const baseUrl = 'https://spotify-api-wrapper.appspot.com';

export  function getTracks(id) {
    return function(dispatch) {
        return new Promise(function(resolve,reject){
            
            axios.get(baseUrl + `/artist/${id}/top-tracks`)
            .then(res => {
                console.log(res)
                dispatch({
                    type:GET_ARTIST_TOP_TRACKS,
                    data:res.data.tracks
                })
                resolve(res.data);
            })
            
        })
    }
}