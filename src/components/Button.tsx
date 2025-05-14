import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type Props = TouchableOpacityProps & {
	text: string;
	textStyle?: TextStyle;
};

const Button = ({ text, textStyle, ...props }: Props) => {
	return (
		<TouchableOpacity style={[props.style, styles.button]} {...props}>
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
		marginTop: -40,
	},
	buttonText: {
		color: "white",
		fontWeight: "600",
		fontSize: 15,
	},
});
