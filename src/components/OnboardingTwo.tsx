import { StyleSheet, View } from "react-native";
import React from "react";
import FontedText from "./FontedText";
import { Image } from "expo-image";
import { responsiveFontSize, responsiveSpacing } from "../utils/helpers";
import { DEVICE_HEIGHT, DEVICE_WIDTH, isSmallDevice } from "../utils/constants";

type Props = {};

const OnboardingTwo = ({}: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.welcomeTextContainer}>
					<FontedText text='Get plant ' fontWeight='medium' style={styles.welcomeText} />
					<View>
						<FontedText text='care guides' fontWeight='extraBold' style={styles.welcomeText} />
						<Image
							source={require("../assets/images/underline-shadow.png")} // there is a shadow in the figma file for the underline thing but the exported asset does not have it
							style={styles.underline}
							contentFit='contain'
						/>
					</View>
				</View>
			</View>
			<View>
				<Image source={require("../assets/images/onboarding-2.png")} style={styles.image} contentFit='contain' />
				<View style={styles.artwork}>
					<Image source={require("../assets/images/onboarding-2-1.png")} style={styles.image2} contentFit='contain' />
				</View>
			</View>
			<View style={styles.blurContainer2} />
		</View>
	);
};

export default OnboardingTwo;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		width: DEVICE_WIDTH,
		overflow: "hidden",
	},
	header: {
		width: "100%",
	},
	welcomeTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: responsiveSpacing(76),
		flexWrap: "wrap",
	},
	welcomeText: {
		fontSize: responsiveFontSize(26),
		color: "#13231B",
		textShadowColor: "rgba(0,0,0,0.5)",
		textShadowOffset: {
			height: 2,
			width: 0.5,
		},
		textShadowRadius: 5,
	},
	subtext: {
		fontSize: responsiveFontSize(15),
		color: "#13231BB2",
		width: "85%",
		lineHeight: 22,
	},
	image: {
		width: DEVICE_WIDTH,
		aspectRatio: isSmallDevice ? 0.78 : 0.65,
		alignSelf: "center",
	},
	image2: {
		width: "100%",
		height: "100%",
		zIndex: 2,
	},
	underline: {
		height: 85,
		width: "100%",
		position: "absolute",
		top: 5,
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
	artwork: {
		position: "absolute",
		right: responsiveSpacing(-35),
		width: 400,
		height: 400,
		top: responsiveSpacing(-120),
	},
});
