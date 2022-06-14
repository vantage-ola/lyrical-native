import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator,SafeAreaView } from "react-native";
import { API_URL,API_KEY } from "../config";
import MusicSection from "../components/musicSection";
import { ScrollView } from "react-native-gesture-handler";

const initialState = {
	response: [],
	next_page: 0
};
function randomArtistsGenerator() {

};
function HomeScreen({ navigation }) {

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

  useEffect(() => {
    setLoading(true);
    // *insert random artists
    fetch(`${API_URL}artists/2300/songs?sort=popularity&page=1&per_page=48`, {...defaultConfig} )
    .then((response) => response.json())
    .then((data = initialState) => {


        setLoading(false);
        setData(data.response.songs);
        //console.log(data)

        if (error) setError(null);
    })
    .catch((e) => {
        setLoading(false);
        setError("Fetching songs failed");

    });
}, []);
   
    

  if (loading)
   return (
    <View styles={styles.container}>
      <ActivityIndicator size="large" color="#e8c310"></ActivityIndicator>
    </View>
  );

  if (error) return <Text>ERROR: {error}</Text>;

return (
  <SafeAreaView>
    <ScrollView>
    <MusicSection
          onPress={handlePress}
          data={data}
          title="Featured Artist Songs"
        ></MusicSection>
    </ScrollView>
  </SafeAreaView>
)
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8c310",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    padding: 10,
    textAlign: "center"
  }
});
