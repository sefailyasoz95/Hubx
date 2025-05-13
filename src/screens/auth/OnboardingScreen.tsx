import { StyleSheet, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../utils/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import FontedText from "../../components/FontedText";
import { LinearGradient } from "expo-linear-gradient";
import { DEVICE_WIDTH } from "../../utils/constants";
type Props = NativeStackScreenProps<AuthStackParams, "OnboardingScreen">;

const OnboardingScreen = ({ navigation, route }: Props) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.blurContainer}>
				<LinearGradient
					colors={["rgba(173, 216, 230, 0.4)", "rgba(173, 216, 230, 0.1)", "transparent"]}
					style={styles.circle}
					start={{ x: 0.1, y: 0.1 }}
					end={{ x: 1, y: 1 }}
				/>
			</View>
			<View style={styles.header}>
				<View style={styles.welcomeTextContainer}>
					<FontedText text='Welcome to ' style={styles.welcomeText} />
					<FontedText text='PlantApp' fontType='bold' style={styles.welcomeText} />
				</View>
				<FontedText text='Identify more than 3000+ plants and 88% accuracy.' style={styles.subtext} />
			</View>
			<Image
				source={require("../../assets/images/onboarding-1.png")}
				style={styles.onboardingOne}
				contentFit='contain'
				transition={{}}
			/>
		</SafeAreaView>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		alignItems: "center",
	},
	header: {
		gap: 8,
	},
	welcomeTextContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	welcomeText: {
		fontSize: 28,
		color: "#13231B",
	},
	subtext: {
		fontSize: 16,
		color: "#13231BB2",
	},
	blurContainer: {
		position: "absolute",
		top: -100,
		right: -120,
		borderRadius: "50%",
		overflow: "hidden",
	},
	circle: {
		width: 300,
		height: 300,
		borderRadius: "50%",
	},
	onboardingOne: {
		width: DEVICE_WIDTH,
		aspectRatio: 1,
	},
});
