import { useState, useEffect } from 'react';
import API from '../API';

const initialState = {
	response: [],
	next_page: 0
};


export const useLyricFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    
    const fetchSearch = async(searchTerm='') => {
		try {

			setError(false)
			setLoading(true);

			const search = await API.fetchSearch(searchTerm);

			setState({ search: search.response.hits})

		} catch(error) {
			setError(true);

		}
		setLoading(false);
	};

    useEffect(() => {
		fetchSearch(searchTerm);

	}, [searchTerm])

    return {state, searchTerm, loading,  setSearchTerm, error}
};