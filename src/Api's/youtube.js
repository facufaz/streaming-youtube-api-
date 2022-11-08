import axios from 'axios';

const KEY = 'AIzaSyDIm49Xl3f-2w2ExuVjEzuatt9_R3SFXm4';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 25,
        key: KEY
    }
});