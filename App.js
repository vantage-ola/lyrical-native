// design adapated from https://www.codiculum.com/tutorial/2021/04/movie-app-with-react-native/
import * as React from "react";
import { NavigationContainer, DarkTheme  } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./tabs/home";
import SearchTab from "./tabs/search";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#e8c310",
          inactiveTintColor: "gray",
          labelPosition: "below-icon",
  
        }}

      >
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Search" component={SearchTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
