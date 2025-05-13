import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/app/HomeScreen";
import { TabStackParams } from "../utils/types";
import { Ionicons, Entypo } from "@expo/vector-icons";
import ProfileScreen from "../screens/app/ProfileScreen";
import DiagnoseScreen from "../screens/app/DiagnoseScreen";
import CameraScreen from "../screens/app/CameraScreen";
import MyGardenScreen from "../screens/app/MyGardenScreen";

const Tab = createBottomTabNavigator<TabStackParams>();

const TabStack = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Tab.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => <Ionicons name='home-outline' size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name='DiagnoseScreen'
				component={DiagnoseScreen}
				options={{
					tabBarIcon: ({ color }) => <Entypo name='help' size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name='CameraScreen'
				component={CameraScreen}
				options={{
					tabBarIcon: ({ color }) => <Ionicons name='camera-outline' size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name='MyGardenScreen'
				component={MyGardenScreen}
				options={{
					tabBarIcon: ({ color }) => <Ionicons name='flower-outline' size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name='ProfileScreen'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color }) => <Ionicons name='person-outline' size={24} color={color} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabStack;
