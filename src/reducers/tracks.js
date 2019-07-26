import { GET_ARTIST_TOP_TRACKS,GET_ARTIST_FAIL } from './../constants/actionTypes'

const initialState = [

]


const tracks_reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTIST_TOP_TRACKS:
            return Object.assign([], state, action.data)
        case GET_ARTIST_FAIL:
            return [];
        default: return state;
    }
}

export default tracks_reducer;