import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useAppDispatch, useAppSelector } from "./src/redux/store";
import { signIn } from "./src/redux/reducer";
import { NavigationContainer } from "@react-navigation/native";
import TabStack from "./src/stacks/TabStack";
import AuthStack from "./src/stacks/AuthStack";

const Main = () => {
	const isAuthenticated = useAppSelector((state) => state.global.isAuthenticated);
	const dispatch = useAppDispatch();
	const appInit = async () => {
		try {
			await Font.loadAsync({
				RubikRegular: require("./src/assets/fonts/Rubik-Regular.ttf"),
				RubikItalic: require("./src/assets/fonts/Rubik-Italic.ttf"),
				RubikBold: require("./src/assets/fonts/Rubik-Bold.ttf"),
			});
			const isOnboardingPassed = await AsyncStorage.getItem("onboarding_completed");
			if (isOnboardingPassed) {
				dispatch(signIn(true));
			} else {
				dispatch(signIn(false));
			}
		} catch (error) {
			dispatch(signIn(false));
		} finally {
			await SplashScreen.hideAsync();
		}
	};
	useEffect(() => {
		appInit();
	}, []);

	return <NavigationContainer>{isAuthenticated ? <TabStack /> : <AuthStack />}</NavigationContainer>;
};

export default Main;
