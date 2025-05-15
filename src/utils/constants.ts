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
export const isSmallDevice = DEVICE_WIDTH < 400;
