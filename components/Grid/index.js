import React from "react";
import { View, Text } from "react-native";

const Grid = ({ header, children}) => {
    return(
        <View>
            <Text>{header}</Text>
            <Text>{children}</Text>

        </View>
    )
};

export default Grid;