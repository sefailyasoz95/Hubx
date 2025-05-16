import { Text, TextProps, TextStyle } from "react-native";
import React, { useMemo } from "react";
import { FontTypes } from "../utils/types";

type Props = TextProps & {
	text: string;
	fontWeight?: FontTypes;
};

const FontedText = ({ text, fontWeight = "regular", ...props }: Props) => {
	const fontFamily = useMemo<TextStyle>(() => {
		return {
			fontFamily:
				fontWeight === "regular"
					? "RubikRegular"
					: fontWeight === "light"
					? "RubikItalic"
					: fontWeight === "bold"
					? "RubikBold"
					: fontWeight === "medium"
					? "RubikMedium"
					: "RubikExtraBold",
			letterSpacing: 0.25,
		};
	}, [fontWeight]);
	return (
		<Text {...props} style={[fontFamily, props.style]}>
			{text}
		</Text>
	);
};

export default FontedText;
