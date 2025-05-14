import { Text, TextProps, TextStyle } from "react-native";
import React, { useMemo } from "react";
import { FontTypes } from "../utils/types";

type Props = TextProps & {
	text: string;
	fontType?: FontTypes;
};

const FontedText = ({ text, fontType = "regular", ...props }: Props) => {
	const fontFamily = useMemo<TextStyle>(() => {
		return {
			fontFamily:
				fontType === "regular"
					? "RubikRegular"
					: fontType === "light"
					? "RubikItalic"
					: fontType === "bold"
					? "RubikBold"
					: fontType === "medium"
					? "RubikMedium"
					: "RubikExtraBold",
			letterSpacing: 0.25,
		};
	}, [fontType]);
	return (
		<Text {...props} style={[fontFamily, props.style]}>
			{text}
		</Text>
	);
};

export default FontedText;
