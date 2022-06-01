import React , { useState, useEffect } from 'react';
import {
    API_KEY,
    API_SEARCH_URL,
    API_URL
   } from '../config'

const initialState = {
	response: []
};

const defaultConfig = {
    method: 'GET',
    "headers": {
           "x-rapidapi-host": "genius.p.rapidapi.com",
           "x-rapidapi-key": `${API_KEY}`,
   }, 
   };

export const useLyricFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState([]);

    
    const fetchSearch = async(searchTerm) => {

		const url = `${API_SEARCH_URL}?q=${searchTerm}`
		const response = await (await fetch(url, {...defaultConfig})).json();

		//const search = await API.fetchSearch(searchTerm);
		setState({ search: response.response.hits})

	};

    useEffect(() => {
		fetchSearch(searchTerm);

	}, [searchTerm])

    return {state, searchTerm,  setSearchTerm}
};