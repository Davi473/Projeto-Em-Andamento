import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Mes from "../screens/Home/Meses/Mes";

const Stack = createStackNavigator();

export default function StackHomeRoutes()
{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Mes" component={Mes}/>
        </Stack.Navigator>
    )
}