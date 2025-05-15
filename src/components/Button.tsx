import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { responsiveFontSize } from "../utils/helpers";

type Props = TouchableOpacityProps & {
	text: string;
	textStyle?: TextStyle;
};

const Button = ({ text, textStyle, ...props }: Props) => {
	return (
		<TouchableOpacity {...props} style={[styles.button, props.style]}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#28AF6E",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 56,
	},
	buttonText: {
		color: "white",
		fontWeight: "600",
		fontSize: responsiveFontSize(16),
	},
});
