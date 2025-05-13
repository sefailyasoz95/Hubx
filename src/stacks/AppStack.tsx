import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../utils/types";
import HomeScreen from "../screens/app/HomeScreen";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default AppStack;
