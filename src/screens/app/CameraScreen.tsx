import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabStackParams } from "../../utils/types";

type Props = BottomTabScreenProps<TabStackParams, "CameraScreen">;

const CameraScreen = ({ navigation, route }: Props) => {
	return (
		<View>
			<Text>CameraScreen</Text>
		</View>
	);
};

export default CameraScreen;

const styles = StyleSheet.create({});
