import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabStackParams } from "../../utils/types";

type Props = BottomTabScreenProps<TabStackParams, "ProfileScreen">;

const ProfileScreen = ({ navigation, route }: Props) => {
	return (
		<View>
			<Text>ProfileScreen</Text>
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({});
