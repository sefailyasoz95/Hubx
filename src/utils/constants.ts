import { Dimensions } from "react-native";
import { FontTypes } from "./types";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;
export const BlurHash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const Font_Types: Record<FontTypes, FontTypes> = {
	bold: "bold",
	extraBold: "extraBold",
	light: "light",
	regular: "regular",
	medium: "medium",
};
export const isSmallDevice = DEVICE_HEIGHT < 700;
export const Onboarding = [
	{
		id: 1,
		headerText1: "Welcome to",
		headerText2: "PlantApp",
		hasUnderline: false,
		subText1: "Identify more than 3000+ plants and",
		subText2: "88% accuracy.",
		image: require("../assets/images/onboarding-1.png"),
		buttonText: "Get Started",
		showIndicator: false,
		isPaywall: false,
		fontType: Font_Types.regular,
	},
	{
		id: 2,
		headerText1: "Welcome to",
		headerText2: "PlantApp",
		hasUnderline: false,
		subText1: "Identify more than 3000+ plants and",
		subText2: "88% accuracy.",
		image: require("../assets/images/onboarding-1.png"),
		buttonText: "Get Started",
		showIndicator: false,
		isPaywall: false,
		fontType: Font_Types.regular,
	},
];
