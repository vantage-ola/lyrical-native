import React, { useState } from "react";
import { API_SEARCH_URL,API_KEY } from "../config";
import { SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import SearchList from "../components/searchList";

const initialState = {
	response: [],
};

function SearchScreen({ navigation }) {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(initialState);
    
    const defaultConfig = {
        method: 'GET',
        "headers": {
           "x-rapidapi-host": "genius.p.rapidapi.com",
           "x-rapidapi-key": `${API_KEY}`,
       }, 
       };

    const handlePress = ({ title, id }) =>
      navigation.navigate("Song", {
        id,
        title,
      });
    const clearSearch = () => {
      setLoading(false);
      setData(initialState);
      setSearchValue("");
    };
    const handleSearch = (value) => {
      const query = encodeURIComponent(value);
  
      if (value === "") return clearSearch();
      setLoading(true);
      fetch(`${API_SEARCH_URL}?q=${query}`, {...defaultConfig})
        .then((response) => response.json())
        .then((data=initialState) => {

            setLoading(false);
            setData(data.response.hits);
            if (error) setError(null);
        })
        .catch((e) => {
          setLoading(false);
          setError("Fetching songs failed");
        });
      setSearchValue(value);
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar
        inputStyle={{ backgroundColor: "rgb('19,19,19)" }}
        inputContainerStyle={{ backgroundColor: "rgb(19,19,19" }}
        containerStyle={{ backgroundColor: "rgb(19,19,19)" }}
          placeholder="Type Here..."
          onChangeText={handleSearch}
          value={searchValue}
        />
        <SearchList
        onPress={handlePress}
        loading={loading}
        error={error}
        data={data}
        search={searchValue}>
        </SearchList>
      </SafeAreaView>
    );
  }


export default SearchScreen;