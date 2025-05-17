import React, { useMemo } from "react";
import { View, TouchableOpacity, Animated, Platform, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const getIconName = (routeName: string, focused: boolean) => {
	switch (routeName) {
		case "HomeScreen":
			return "home";
		case "DiagnoseScreen":
			return "shield-checkmark";
		case "CameraScreen":
			return "scan";
		case "MyGardenScreen":
			return "leaf";
		case "ProfileScreen":
			return "person";
		default:
			return "help-circle";
	}
};

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
	const { bottom } = useSafeAreaInsets();
	return (
		<BlurView style={[styles.tabbar, { marginBottom: bottom + 5 }]}>
			{state.routes.map((route, index) => {
				const focused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!focused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};
				const color = useMemo(() => {
					if (route.name !== "CameraScreen") {
						return focused ? "#28AF6E" : "#94a3b8";
					} else {
						return "#fff";
					}
				}, [route.name, focused]);
				return (
					<TouchableOpacity
						key={route.key}
						onPress={onPress}
						activeOpacity={0.7}
						style={route.name === "CameraScreen" ? styles.camera : undefined}>
						<Animated.View>
							<Ionicons name={getIconName(route.name, focused)} size={24} color={color} />
						</Animated.View>
					</TouchableOpacity>
				);
			})}
		</BlurView>
	);
};

export default CustomTabBar;

const styles = StyleSheet.create({
	tabbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		height: 50,
	},
	camera: {
		backgroundColor: "#28AF6E",
		width: 60,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		marginBottom: 50,
		borderWidth: 4,
		borderColor: "#2CCC80",
		borderStyle: "solid",
	},
});
