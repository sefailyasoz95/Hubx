import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../utils/types";
import OnboardingScreen from "../screens/auth/OnboardingScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
