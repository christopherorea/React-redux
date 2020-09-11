import { combineReducers } from 'redux';

const songsReducer = () => {
    return[
        {title : 'Nanana1', duration: '1:00'},
        {title : 'Nanana2', duration: '2:00'},
        {title : 'Nanana3', duration: '2:01'},
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});