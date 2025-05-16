import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	AuthStackParams,
	FontAwesomeName,
	IconName,
	IoniconName,
	MaterialCommunityIconsName,
	MaterialIconName,
	PaywallOptionType,
} from "../../utils/types";
import { Image } from "expo-image";
import { DEVICE_HEIGHT, DEVICE_WIDTH, isSmallDevice, PaywallFeatures, PremiumOptions } from "../../utils/constants";
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FontedText from "../../components/FontedText";
import { responsiveFontSize, responsiveSpacing } from "../../utils/helpers";
import { BlurView } from "expo-blur";

type Props = NativeStackScreenProps<AuthStackParams, "PaywallScreen">;

const PaywallScreen = ({ navigation, route }: Props) => {
	const handleX = () => {};
	const renderIcon = (iconLibrary: PaywallOptionType["iconLibrary"], iconName: IconName) => {
		switch (iconLibrary) {
			case "Ionicons":
				return <Ionicons name={iconName as IoniconName} color={"white"} size={18} />;
			case "MaterialIcons":
				return <MaterialIcons name={iconName as MaterialIconName} color={"white"} size={18} />;
			case "FontAwesome":
				return <FontAwesome name={iconName as FontAwesomeName} color={"white"} size={18} />;
			case "MaterialCommunityIcons":
				return <MaterialCommunityIcons name={iconName as MaterialCommunityIconsName} color={"white"} size={18} />;
		}
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.x} onPress={handleX}>
				<Ionicons name='close' color={"white"} size={15} />
			</TouchableOpacity>
			<Image source={require("../../assets/images/paywall.png")} style={styles.image} contentFit='cover' />
			<View style={styles.content}>
				<View style={styles.header}>
					<View style={styles.title}>
						<FontedText text='PlantApp' style={styles.titleText} fontWeight='bold' />
						<FontedText text=' Premium' style={styles.titleText} fontWeight='light' />
					</View>
					<FontedText text='Access All Features' style={styles.subtext} />
				</View>
				<FlatList
					data={PaywallFeatures}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.flatlist}
					snapToAlignment='center'
					snapToInterval={DEVICE_WIDTH * 0.4}
					renderItem={({ item, index }) => (
						<BlurView style={styles.renderItem} key={index} tint='dark'>
							<View style={styles.iconWrapper}>{renderIcon(item.iconLibrary, item.icon)}</View>
							<FontedText style={styles.itemTitle} text={item.title} fontWeight='medium' />
							<FontedText style={styles.itemSubtitle} text={item.subtitle} />
						</BlurView>
					)}
				/>
				<View style={styles.bottomCTA}>
					{PremiumOptions.map((option, index) => (
						<Pressable key={index} style={styles.premiumSelected}>
							<FontedText text={option.title} key={index} />
						</Pressable>
					))}
				</View>
			</View>
		</View>
	);
};

export default PaywallScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(19,30,23)",
	},
	image: {
		width: DEVICE_WIDTH,
		aspectRatio: isSmallDevice ? 0.99 : 0.74,
	},
	content: {
		// backgroundColor: "black",
		position: "absolute",
		height: DEVICE_HEIGHT,
		width: DEVICE_WIDTH,
		justifyContent: "space-between",
	},
	x: {
		backgroundColor: "rgba(0,0,0,0.5)",
		padding: 5,
		borderRadius: 50,
		position: "absolute",
		top: isSmallDevice ? 30 : 50,
		right: isSmallDevice ? 20 : 30,
		zIndex: 5,
	},
	title: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: "auto",
	},
	titleText: {
		color: "white",
		fontSize: responsiveFontSize(30),
	},
	subtext: {
		color: "rgba(255,255,255,.7)",
		fontSize: responsiveFontSize(17),
		lineHeight: 24,
		marginTop: 5,
		marginBottom: -5,
	},
	renderItem: {
		overflow: "hidden",
		borderRadius: 12,
		width: DEVICE_WIDTH * 0.41,
		height: 125,
		paddingVertical: 12,
		paddingHorizontal: 16,
		gap: 8,
		backgroundColor: "rgba(255,255,255,0.1)",
	},
	itemTitle: {
		color: "white",
		fontSize: responsiveFontSize(20),
		lineHeight: 24,
	},
	itemSubtitle: {
		color: "rgba(255,255,255,.7)",
		fontSize: responsiveFontSize(13),
		lineHeight: 18,
	},
	flatlist: {
		height: 130,
		gap: 10,
		marginTop: responsiveSpacing(25),
		marginBottom: responsiveSpacing(-25),
		paddingHorizontal: responsiveSpacing(24),
	},
	iconWrapper: {
		backgroundColor: "rgba(0,0,0,0.3)",
		borderRadius: 8,
		width: 36,
		height: 35.5,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 8,
	},
	header: { flex: 1, paddingHorizontal: responsiveSpacing(24) },
	premiumSelected: {
		width: DEVICE_WIDTH * 0.9,
		alignSelf: "center",
		borderRadius: 14,
		borderWidth: 1.5,
		paddingVertical: 18,
		paddingHorizontal: 12,
		marginVertical: 5,
		backgroundColor: "rgba(100,100,100,0.5)",
		borderColor: "rgba(100,100,100,0.5)",
	},
	bottomCTA: {
		position: "absolute",
		bottom: 0,
	},
});
