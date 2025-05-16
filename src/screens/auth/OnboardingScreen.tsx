import { ScrollView, StyleSheet, View } from "react-native";
import React, { createRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../utils/types";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingOne from "../../components/OnboardingOne";
import OnboardingTwo from "../../components/OnboardingTwo";
import { DEVICE_WIDTH, isSmallDevice } from "../../utils/constants";
import { responsiveSpacing } from "../../utils/helpers";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<AuthStackParams, "OnboardingScreen">;

const OnboardingScreen = ({ navigation, route }: Props) => {
	const [activeIndicator, setActiveIndicator] = useState<number>(1);
	const scrollRef = createRef<ScrollView>();
	const goNext = () => {
		scrollRef.current?.scrollToEnd();
		activeIndicator === 1 ? setActiveIndicator(2) : goToPaywall();
	};
	const goToPaywall = () => navigation.navigate("PaywallScreen", { defaulOption: "yearly" });
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				ref={scrollRef}
				style={styles.scrollView}
				scrollEnabled={false}
				horizontal
				showsHorizontalScrollIndicator={false}>
				<OnboardingOne onContinue={goNext} />
				<OnboardingTwo />
			</ScrollView>
			<View style={styles.bottomSection}>
				<Button text='Continue' onPress={goNext} />
				<View style={styles.indicators}>
					{[1, 2].map((item) => (
						<View style={item === activeIndicator ? styles.activeIndicator : styles.inactiveIndicator} key={item} />
					))}
					{/* I know there are 3 dots in the figma file but it just didn't make sense 
					and since this is an actual app you have,
					you might just copied & pasted and/or 
					removed another screen etc. from the file 
					that is given to us so that's why using just two */}
				</View>
			</View>
		</SafeAreaView>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fafafa",
	},
	scrollView: {
		width: DEVICE_WIDTH,
	},
	indicators: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	activeIndicator: {
		width: 9,
		height: 9,
		borderRadius: 50,
		backgroundColor: "black",
	},
	inactiveIndicator: {
		width: 7,
		height: 7,
		borderRadius: 50,
		backgroundColor: "gray",
	},
	bottomSection: {
		width: DEVICE_WIDTH,
		paddingHorizontal: 24,
		alignItems: "center",
		gap: 15,
		backgroundColor: "#fafafa",
		marginBottom: isSmallDevice ? 15 : 32,
		shadowColor: "white",
		shadowOffset: {
			height: -15,
			width: 0,
		},
		shadowOpacity: 0.7,
		shadowRadius: 10,
	},
});
