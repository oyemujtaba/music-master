
import {
    GET_ARTIST_REQUEST, GET_ARTIST_SUCCESS, GET_ARTIST_FAIL
} from './../constants/actionTypes';
const initialState = {

}

const artist_reducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case GET_ARTIST_SUCCESS:
            return Object.assign({}, state, action.data.artists.items[0]);
        case GET_ARTIST_FAIL:
            alert("ARTIST NOT FOUND")
            return {};
        default: return state;
    }
}

export default artist_reducer;