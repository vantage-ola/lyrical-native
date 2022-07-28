import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from "react-native";

function MusicSection({title, data, onPress }) {
    const keyExtractor = (item, index) => item.id;

    const renderItem = ({ item }) => (
        <TouchableOpacity
        onPress={() => onPress(item)}
        style = {styles.cardOuterContainer} >
         <Image 
         style={styles.cardImage}
         source={{
             uri: item.header_image_url
         }}
         />
         <View style={styles.cardInnerContainer}>
             <Text style={styles.cardTitle}>{item.title}</Text> 
         </View>
        </TouchableOpacity>
    );
    

    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <View>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 70 }}
                    keyExtractor={keyExtractor}
                    data={data}
                    horizontal
                    renderItem={renderItem}
                />
            </View>

        </View>
    );
}

export default MusicSection;

const styles = StyleSheet.create({

    container: {
        width: "100%",
        backgroundColor: "rgb(19,19,19)",
        padding: 10,
        color: "#e8c310"
      },
      title: {
        fontSize: 27,
        fontWeight: "bold",
        marginTop: 20,
        color: "rgb(232, 195, 16)"
      },
      cardOuterContainer: {
        position: "relative",
        width: 140,
        height: 200,
        marginRight: 10,
        paddingTop: 20
      },
      cardImage: { width: "100%", height: "100%", position: "absolute" },
      cardInnerContainer: {
        padding: 10,
      },
      cardTitle: {
        fontFamily: "AppleSDGothicNeo-SemiBold",
        fontSize: 18,
        color: "white",
      },

});