import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export type IoniconName = keyof typeof Ionicons.glyphMap;
export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
export type FontAwesomeName = keyof typeof FontAwesome.glyphMap;
export type MaterialCommunityIconsName = keyof typeof MaterialCommunityIcons.glyphMap;

export type IconName = IoniconName | MaterialIconName | FontAwesomeName | MaterialCommunityIconsName;

export type TabStackParams = {
	HomeScreen: undefined;
	DiagnoseScreen: undefined;
	CameraScreen: undefined;
	MyGardenScreen: undefined;
	ProfileScreen: undefined;
};

export type AuthStackParams = {
	OnboardingScreen: undefined;
	GetStartedScreen: undefined;
	PaywallScreen: {
		defaulOption?: PremiumTypes;
	};
};

export type APIResponseType<T> = {
	success: boolean;
	message: string;
	data: T;
};

export type InitialState = {
	loadingCategories: boolean;
	loadingQuestions: boolean;
	success: boolean;
	error: boolean;
	message: string;
	questions: Array<QuestionType>;
	categories: Array<CategoryType>;
	isAuthenticated?: boolean;
};

export type QuestionType = {
	id: number;
	title: string;
	subtitle: string;
	image_uri: string;
	uri: string;
	order: number;
};

export type CategoryType = {
	id: number;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	title: string;
	rank: number;
	image: {
		id: number;
		name: string;
		alternativeText: string | null;
		caption: string | null;
		width: number;
		height: number;
		formats: null;
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: string | null;
		provider: string;
		provider_metadata: string | null;
		createdAt: Date;
		updatedAt: Date;
	};
};

export type FontTypes = "light" | "regular" | "medium" | "bold" | "extraBold";
export type PaywallOptionType = {
	id: number;
	icon: IconName;
	iconLibrary: "Ionicons" | "MaterialIcons" | "FontAwesome" | "MaterialCommunityIcons";
	title: string;
	subtitle: string;
};

export type PremiumTypes = "yearly" | "monthly";
