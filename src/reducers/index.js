import { combineReducers } from 'redux';
import artist from './artist';
import tracks from './tracks';
import auth from './auth';


export default combineReducers({
    artist,
    tracks,
    auth,
});