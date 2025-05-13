import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../utils/types";

type Props = NativeStackScreenProps<AuthStackParams, "PaywallScreen">;

const PaywallScreen = ({ navigation, route }: Props) => {
	return (
		<View>
			<Text>PaywallScreen</Text>
		</View>
	);
};

export default PaywallScreen;

const styles = StyleSheet.create({});
