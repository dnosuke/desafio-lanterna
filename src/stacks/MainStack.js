import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Load from "../screens/Load";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
        initialRouteName="Load"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
)