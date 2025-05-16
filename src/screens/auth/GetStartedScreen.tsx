import { StyleSheet, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../utils/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import FontedText from "../../components/FontedText";
import { DEVICE_HEIGHT, DEVICE_WIDTH, isSmallDevice } from "../../utils/constants";
import Button from "../../components/Button";
import { responsiveSpacing } from "../../utils/helpers";
type Props = NativeStackScreenProps<AuthStackParams, "GetStartedScreen">;

const GetStartedScreen = ({ navigation, route }: Props) => {
	const handleGetStarted = () => {
		navigation.navigate("OnboardingScreen");
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.blurContainer} />
			<View style={styles.header}>
				<View style={styles.welcomeTextContainer}>
					<FontedText text='Welcome to ' style={styles.welcomeText} />
					<FontedText text='PlantApp' fontWeight='bold' style={styles.welcomeText} />
				</View>
				<FontedText text='Identify more than 3000+ plants and 88% accuracy.' style={styles.subtext} />
			</View>
			<Image source={require("../../assets/images/get-started.png")} style={styles.image} contentFit='contain' />
			<View style={styles.blurContainer2} />
			<Button text='Get Started' onPress={handleGetStarted} style={styles.getStarted} />
			<View style={styles.bottomTextContainer}>
				<FontedText text='By tapping next, you are agreeing to PlantID ' style={styles.bottomText} />
				<View style={{ flexDirection: "row" }}>
					<FontedText text='Terms of Use' style={[styles.bottomText, styles.underline]} />
					<FontedText text=' & ' style={styles.bottomText} />
					<FontedText text='Privacy Policy.' style={[styles.bottomText, styles.underline]} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default GetStartedScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		alignItems: "center",
		backgroundColor: "#fafafa",
	},
	header: {
		width: "100%",
	},
	welcomeTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	welcomeText: {
		fontSize: 28,
		color: "#13231B",
	},
	subtext: {
		fontSize: 16,
		color: "#13231BB2",
		width: "85%",
		lineHeight: 22,
	},
	blurContainer: {
		position: "absolute",
		top: -400,
		right: -300,
		borderRadius: "50%",
		backgroundColor: "#C0F0FF",
		shadowColor: "#C0F0FF",
		shadowOffset: {
			height: 200,
			width: -50,
		},
		shadowOpacity: 0.5,
		shadowRadius: 50,
		width: 400,
		zIndex: -1,
		height: 400,
	},
	blurContainer2: {
		position: "absolute",
		top: DEVICE_HEIGHT / 2.5,
		left: -400,
		borderRadius: "50%",
		backgroundColor: "#C0F0FFdd",
		shadowColor: "#C0F0FFdd",
		shadowOffset: {
			height: -200,
			width: 100,
		},
		shadowOpacity: 0.5,
		shadowRadius: 50,
		width: 400,
		height: 400,
		zIndex: -1,
	},
	image: {
		width: DEVICE_WIDTH,
		aspectRatio: isSmallDevice ? 0.8 : 0.65,
	},
	button: {
		backgroundColor: "#28AF6E",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 56,
		marginTop: -40,
	},
	buttonText: {
		color: "white",
		fontWeight: "600",
		fontSize: 15,
	},
	bottomTextContainer: {
		width: "100%",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 26,
	},
	bottomText: {
		fontSize: 12,
		color: "#597165B2",
		lineHeight: 15,
		letterSpacing: 0.07,
	},
	underline: {
		textDecorationLine: "underline",
	},
	getStarted: {
		marginTop: responsiveSpacing(-30),
	},
});
