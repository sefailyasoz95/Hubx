import { Text, TextProps, TextStyle } from "react-native";
import React, { useMemo } from "react";

type Props = TextProps & {
	text: string;
	fontType?: "italic" | "regular" | "bold";
};

const FontedText = ({ text, fontType = "regular", ...props }: Props) => {
	const fontFamily = useMemo<TextStyle>(() => {
		return {
			fontFamily: fontType === "regular" ? "RubikRegular" : fontType === "italic" ? "RubikItalic" : "RubikBold",
			letterSpacing: 0.25,
		};
	}, [fontType]);
	return (
		<Text {...props} style={[props.style, fontFamily]}>
			{text}
		</Text>
	);
};

export default FontedText;
