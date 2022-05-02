import React, {useState} from "react";
import { View, TextInput } from "react-native";
import {Styles} from "./SearchBar.styles";

const SearchBar= () => {
    return (
        <View style={Styles.view}>
            <TextInput 
                placeholder="Search Songs and Lyrics..." 
                style={Styles.input} 
                // Remove border outline when clicked.
                // Change placeholder text colour.
                />

        </View>   
    )
}


export default SearchBar;