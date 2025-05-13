import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../utils/types";

type Props = NativeStackScreenProps<AuthStackParams, "OnboardingScreen">;

const OnboardingScreen = ({ navigation, route }: Props) => {
	return (
		<View>
			<Text>OnboardingScreen</Text>
		</View>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
