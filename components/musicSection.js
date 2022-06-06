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
                    vertical
                    renderItem={renderItem}
                />
            </View>

        </View>
    );
}

export default MusicSection;

const styles = StyleSheet.create({

    container: {

    },
    title: {

    },
    cardOuterContainer: {


    },
    cardImage: { width: "100%", height: "100%", position: "absolute" }
    ,
    cardInnerContainer: {
      
    },
    cardTitle: {

    }

});