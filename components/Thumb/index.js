import React from "react";
import { View, Image } from "react-native";

const Thumb = ({ title, image}) => {

    return (
        <View>
            <Image source={image}/>

            <Text>{title}</Text>
        </View>
    )

};

export default Thumb;