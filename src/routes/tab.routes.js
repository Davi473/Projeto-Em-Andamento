import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import StackHomeRoutes from "./stackHome.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() 
{
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="stackRoutes"
                component={StackHomeRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                    tabBarLabel: "Inicio"
                }}
            />
        </Tab.Navigator>
    )
}