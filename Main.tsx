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
	const [fontsLoaded] = Font.useFonts({
		RubikLight: require("./src/assets/fonts/Rubik-Light.ttf"),
		RubikMedium: require("./src/assets/fonts/Rubik-Medium.ttf"),
		RubikRegular: require("./src/assets/fonts/Rubik-Regular.ttf"),
		RubikSemibold: require("./src/assets/fonts/Rubik-SemiBold.ttf"),
		RubikBold: require("./src/assets/fonts/Rubik-Bold.ttf"),
		RubikExtraBold: require("./src/assets/fonts/Rubik-ExtraBold.ttf"),
	});

	const appInit = async () => {
		try {
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
		if (fontsLoaded) appInit();
	}, [fontsLoaded]);

	return <NavigationContainer>{isAuthenticated ? <TabStack /> : <AuthStack />}</NavigationContainer>;
};

export default Main;
