import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabStackParams } from "../../utils/types";

type Props = BottomTabScreenProps<TabStackParams, "MyGardenScreen">;

const MyGardenScreen = ({ navigation, route }: Props) => {
	return (
		<View>
			<Text>MyGardenScreen</Text>
		</View>
	);
};

export default MyGardenScreen;

const styles = StyleSheet.create({});
