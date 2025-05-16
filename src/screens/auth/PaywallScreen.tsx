import { FlatList, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	AuthStackParams,
	FontAwesomeName,
	IconName,
	IoniconName,
	MaterialCommunityIconsName,
	MaterialIconName,
	PaywallOptionType,
	PremiumTypes,
} from "../../utils/types";
import { Image } from "expo-image";
import { DEVICE_HEIGHT, DEVICE_WIDTH, isSmallDevice, PaywallFeatures, PremiumOptions } from "../../utils/constants";
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FontedText from "../../components/FontedText";
import { responsiveFontSize, responsiveSpacing } from "../../utils/helpers";
import { BlurView } from "expo-blur";
import Button from "../../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDispatch } from "../../redux/store";
import { signIn } from "../../redux/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<AuthStackParams, "PaywallScreen">;

const PaywallScreen = ({ navigation, route }: Props) => {
	const { defaulOption } = route.params;
	const [selectedOption, setselectedOption] = useState<PremiumTypes>(defaulOption ?? "yearly");
	const dispatch = useAppDispatch();
	const { bottom } = useSafeAreaInsets();
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
	const handlePremium = async () => {
		await AsyncStorage.setItem("onboarding_completed", "true");
		dispatch(signIn(true));
	};
	const handleX = handlePremium; // since no actual premium flow
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
				<View style={[styles.bottomCTA, { bottom }]}>
					{PremiumOptions.map((option, index) => (
						<Pressable
							key={index}
							onPress={() => {
								option.type !== selectedOption && setselectedOption(option.type);
							}}>
							<BlurView
								style={[
									styles.premiumBase,
									selectedOption === option.type ? styles.premiumSelected : styles.premiumUnselected,
								]}
								tint='dark'>
								{selectedOption === option.type && option.type === "yearly" && (
									<View style={styles.promotionalTextContainer}>
										<FontedText text='Save 50%' style={styles.promotionalText} fontWeight='medium' />
									</View>
								)}
								{selectedOption === option.type ? (
									<View style={[styles.ctaRadioButtonBase, styles.ctaRadioButtonSelected]}>
										<View style={styles.ctaRadioButtonInner} />
									</View>
								) : (
									<View style={[styles.ctaRadioButtonBase, styles.ctaRadioButtonUnselected]} />
								)}
								<View>
									<FontedText text={option.title} style={styles.ctaTitle} />
									<View style={styles.descriptions}>
										<FontedText
											text={option.descriptionOne.text}
											style={styles.ctaDescription}
											fontWeight={option.descriptionOne.isBold ? "regular" : "light"}
										/>
										<FontedText text={option.descriptionTwo.text} style={styles.ctaDescription} />
									</View>
								</View>
							</BlurView>
						</Pressable>
					))}
					<Button text='Try free for 3 days' style={styles.cta} onPress={handlePremium} />
					<View style={styles.bottomInfo}>
						<FontedText
							text='After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable'
							style={styles.information}
						/>
						<View style={styles.termsPrivacyRestore}>
							<FontedText text='Terms' style={styles.termsPrivactRestoreText} />
							<View style={styles.dot} />
							<FontedText text='Privacy' style={styles.termsPrivactRestoreText} />
							<View style={styles.dot} />
							<FontedText text='Restore' style={styles.termsPrivactRestoreText} />
						</View>
					</View>
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
		position: "absolute",
		height: DEVICE_HEIGHT,
		width: DEVICE_WIDTH,
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
	header: {
		flex: 1,
		paddingHorizontal: responsiveSpacing(24),
		marginTop: isSmallDevice ? -80 : undefined,
	},
	premiumBase: {
		width: DEVICE_WIDTH * 0.85,
		alignSelf: "center",
		borderRadius: 14,
		paddingVertical: responsiveSpacing(16),
		paddingHorizontal: responsiveSpacing(12),
		marginVertical: 5,
		flexDirection: "row",
		alignItems: "center",
		overflow: "hidden",
	},
	premiumSelected: {
		borderWidth: 1.5,
		backgroundColor: "rgb(19,30,23)",
		borderColor: "#28AF6E",
	},
	premiumUnselected: {
		borderWidth: 1,
		backgroundColor: "rgba(255,255,255,0.1)",
		borderColor: "rgba(100,100,100,0.5)",
	},
	bottomCTA: {
		position: "absolute",
		alignSelf: "center",
	},
	ctaTitle: {
		color: "white",
	},
	ctaRadioButtonBase: {
		width: 24,
		height: 24,
		borderRadius: 50,
		marginRight: 8,
	},
	ctaRadioButtonSelected: {
		backgroundColor: "#28AF6E",
		alignItems: "center",
		justifyContent: "center",
	},
	ctaRadioButtonUnselected: {
		backgroundColor: "rgba(100,100,100,0.5)",
	},
	ctaRadioButtonInner: {
		width: 10,
		height: 10,
		backgroundColor: "white",
		borderRadius: 50,
	},
	cta: {
		marginTop: 16,
		width: isSmallDevice ? DEVICE_WIDTH * 0.85 : DEVICE_WIDTH * 0.86,
		alignSelf: "center",
	},
	descriptions: {
		flexDirection: "row",
	},
	ctaDescription: {
		color: "rgba(255,255,255,0.7)",
		fontSize: responsiveFontSize(12),
	},
	promotionalText: {
		color: "white",
		fontSize: responsiveFontSize(12),
		lineHeight: 18,
	},
	promotionalTextContainer: {
		borderBottomLeftRadius: 20,
		zIndex: 2,
		backgroundColor: "#28AF6E",
		position: "absolute",
		top: 0,
		right: 0,
		paddingHorizontal: 12,
		paddingVertical: 4,
		shadowColor: "#28AF6E",
		shadowOffset: {
			width: -20,
			height: 25,
		},
		shadowOpacity: 1,
		shadowRadius: 50,
	},
	information: {
		fontSize: responsiveFontSize(8),
		color: "rgba(255,255,255,0.7)",
		textAlign: "center",
	},
	termsPrivacyRestore: {
		flexDirection: "row",
		alignItems: "center",
	},
	dot: {
		width: 2,
		height: 2,
		backgroundColor: "rgba(255,255,255,0.7)",
		borderRadius: 50,
		marginHorizontal: 8,
	},
	bottomInfo: {
		width: responsiveSpacing(DEVICE_WIDTH * 0.82),
		marginVertical: 6,
		gap: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	termsPrivactRestoreText: {
		fontSize: responsiveFontSize(11),
		color: "rgba(255,255,255,0.7)",
	},
});
