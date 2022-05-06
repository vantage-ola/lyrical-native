import React, {useState, useEffect, useRef} from "react";
import { View, TextInput } from "react-native";
import {Styles} from "./SearchBar.styles";

const SearchBar= ({ setSearchTerm}) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
		if (initial.current) {

			initial.current = false;
			return;
		}
		const timer = setTimeout(() => {
			setSearchTerm(state);
		}, 500)

		return () => clearTimeout(timer)

	}, [setSearchTerm, state])
    return (
        <View style={Styles.view}>
            <TextInput 
                placeholder="Search Songs and Lyrics..." 
                style={Styles.input}
                placeholderTextColor="white"
                // Remove border outline when clicked.
                // Change placeholder text colour.
                onChange={ event => setState(event.currentTarget.value)}
                value={state}
                />

        </View>   
    )
}


export default SearchBar;