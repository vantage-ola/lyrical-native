// Configuration for Genius API
// https://rapidapi.com/brianiswu/api/genius/

import {REACT_APP_API_KEY} from '@env'
const API_URL = 'https://genius.p.rapidapi.com/';
const API_KEY = `${REACT_APP_API_KEY}`;


const API_SEARCH_URL = `${API_URL}search`

export {
 API_KEY,
 API_URL,
 API_SEARCH_URL
 
}

