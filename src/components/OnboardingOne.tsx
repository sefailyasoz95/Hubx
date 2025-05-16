import { StyleSheet, View } from "react-native";
import React from "react";
import FontedText from "./FontedText";
import { Image } from "expo-image";
import { responsiveFontSize } from "../utils/helpers";
import { DEVICE_WIDTH, isSmallDevice } from "../utils/constants";

type Props = {
	onContinue: () => void;
};

const OnboardingOne = ({ onContinue }: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.welcomeTextContainer}>
					<FontedText text='Take a photo to ' fontWeight='medium' style={styles.welcomeText} />
					<View>
						<FontedText text='Identify' fontWeight='extraBold' style={styles.welcomeText} />
						<Image source={require("../assets/images/underline.png")} style={styles.underline} contentFit='contain' />
					</View>
					<FontedText text='the plant!' fontWeight='medium' style={styles.welcomeText} />
				</View>
				<FontedText text='Identify more than 3000+ plants and 88% accuracy.' style={styles.subtext} />
			</View>
			<Image source={require("../assets/images/onboarding-1.png")} style={styles.image} contentFit='contain' />
		</View>
	);
};

export default OnboardingOne;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		width: DEVICE_WIDTH,
	},
	header: {
		width: "100%",
	},
	welcomeTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		flexWrap: "wrap",
	},
	welcomeText: {
		fontSize: responsiveFontSize(26),
		color: "#13231B",
	},
	subtext: {
		fontSize: responsiveFontSize(15),
		color: "#13231BB2",
		width: "85%",
		lineHeight: 22,
	},
	image: {
		width: DEVICE_WIDTH,
		aspectRatio: isSmallDevice ? 0.7 : 0.57,
		alignSelf: "center",
	},
	underline: {
		height: 85,
		width: "100%",
		position: "absolute",
	},
});
