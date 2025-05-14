import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParams } from "../utils/types";
import OnboardingScreen from "../screens/auth/OnboardingScreen";
import PaywallScreen from "../screens/auth/PaywallScreen";
import GetStartedScreen from "../screens/auth/GetStartedScreen";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='GetStartedScreen' component={GetStartedScreen} />
			<Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
			<Stack.Screen name='PaywallScreen' component={PaywallScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
