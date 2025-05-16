import { Dimensions } from "react-native";
import { FontTypes, PaywallOptionType, PremiumTypes } from "./types";

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
export const isSmallDevice = DEVICE_WIDTH < 400;

export const PaywallFeatures: Array<PaywallOptionType> = [
	{
		id: 1,
		icon: "line-scan",
		iconLibrary: "MaterialCommunityIcons",
		subtitle: "Plant Identify",
		title: "Unlimited",
	},
	{
		id: 2,
		icon: "dashboard",
		iconLibrary: "FontAwesome",
		subtitle: "Process",
		title: "Faster",
	},
	{
		id: 3,
		icon: "leaf",
		iconLibrary: "Ionicons",
		subtitle: "Plant Care",
		title: "Detailed",
	},
];

export const PremiumOptions = [
	{
		id: 1,
		type: "monthly" as PremiumTypes,
		title: "1 Month",
		descriptionOne: {
			text: "$2.99/month, ",
			isBold: false,
		},
		descriptionTwo: {
			text: "auto renewable",
			isBold: true,
		},
	},
	{
		id: 2,
		title: "1 Year",
		type: "yearly" as PremiumTypes,
		descriptionOne: {
			text: "First 3 days free, ",
			isBold: true,
		},
		descriptionTwo: {
			text: "then $529,99/year",
			isBold: true,
		},
	},
];
