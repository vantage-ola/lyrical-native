import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";

const Stack = createStackNavigator();

function HomeTab() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          options={{ headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeTab;