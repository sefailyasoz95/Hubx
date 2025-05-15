import { PixelRatio } from "react-native";
import { DEVICE_WIDTH } from "./constants";

const BASE_WIDTH = 375;

export function responsiveFontSize(fontSize: number): number {
	const scale = DEVICE_WIDTH / BASE_WIDTH;
	const newSize = fontSize * scale;
	return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function responsiveSpacing(value: number): number {
	const scale = DEVICE_WIDTH / BASE_WIDTH;
	const newValue = value * scale;
	return Math.round(PixelRatio.roundToNearestPixel(newValue));
}

export function getResponsiveImageSize(
	originalWidth: number,
	originalHeight: number,
	maxWidth: number = DEVICE_WIDTH
): { width: number; height: number } {
	const aspectRatio = originalWidth / originalHeight;
	const width = Math.min(originalWidth, maxWidth);
	const height = width / aspectRatio;

	return { width, height };
}
