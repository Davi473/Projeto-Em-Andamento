import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Lancamento from "../screens/Home/Cartoes/Lancamento";

const Stack = createStackNavigator();

export default function StackHomeRoutes()
{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Lancamento" component={Lancamento}/>
        </Stack.Navigator>
    )
}