import React from "react";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/app/HomeScreen";
import { TabStackParams } from "../utils/types";
import ProfileScreen from "../screens/app/ProfileScreen";
import DiagnoseScreen from "../screens/app/DiagnoseScreen";
import CameraScreen from "../screens/app/CameraScreen";
import MyGardenScreen from "../screens/app/MyGardenScreen";
import CustomTabBar from "../components/CustomTabbar";

const Tab = createBottomTabNavigator<TabStackParams>();
const screenOptions: BottomTabNavigationOptions = {
	headerShown: false,
};
const TabStack = () => {
	return (
		<Tab.Navigator screenOptions={screenOptions} tabBar={(props) => <CustomTabBar {...props} />}>
			<Tab.Screen name='HomeScreen' component={HomeScreen} />
			<Tab.Screen name='DiagnoseScreen' component={DiagnoseScreen} />
			<Tab.Screen name='CameraScreen' component={CameraScreen} />
			<Tab.Screen name='MyGardenScreen' component={MyGardenScreen} />
			<Tab.Screen name='ProfileScreen' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default TabStack;
