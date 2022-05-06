import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./Grid.Styles";

const Grid = props => {
    return(
        <View >
            <Text style={Styles.text} >{props.header}</Text>
            {props.children}

        </View>
    )
};

export default Grid; 