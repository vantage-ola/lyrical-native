import React, { useState, useEffect} from "react";
import { API_KEY, API_URL } from "../config";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { Tile } from "react-native-elements";

function SongScreen({route}) {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = route.params;

    const defaultConfig = {
        method: 'GET',
        "headers": {
           "x-rapidapi-host": "genius.p.rapidapi.com",
           "x-rapidapi-key": `${API_KEY}`,
       }, 
       };

    useEffect(()=> {
        setLoading(true);
        fetch(`${API_URL}songs/${id}`, {...defaultConfig})
            .then((response) => response.json())
            .then((data)=>{
                if (typeof data !== "object") {
                    setError("No song available");
                    return setLoading(false);
                }

                setLoading(false)
                setData(data.response.song);

                if (error) setError(null);
            })
            .catch((e) => {
                setLoading(false);
                setError("Fetching songs failed");
            });
    }, []);

    if (loading)
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color="#e8c310" />
            </View>
        );
    if (error) return <Text>ERROR: {error}</Text>;
    
    console.log(data)
    
    return (
        <View>
            <Text style={styles.fullTitle}>{data.full_title}</Text>            
            <Text>RELEASE DATE</Text>
                <Text>{data.release_date_for_display}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    fullTitle: {
        fontSize: 25,

    }
});

export default SongScreen;