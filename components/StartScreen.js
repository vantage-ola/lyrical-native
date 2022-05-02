import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";


const  StartScreen = () => {
    console.log('ee')
    return (

    <View style={styles.sscreen}>
        <Image style= {{resizeMode: 'center'}} source={require("../assets/logo-2.png")}/>
        <Text>LYRICAL</Text>
        <StatusBar style="auto" />
      </View>
    
    );
};


const styles = StyleSheet.create({
    sscreen: {
            flex: 1,
            backgroundColor: 'rgb(232, 195, 16)',
            alignItems: 'center',
            justifyContent: 'center',
          },

})

export default StartScreen;