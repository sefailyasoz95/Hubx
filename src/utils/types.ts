export type AppStackParams = {
	HomeScreen: undefined;
	DiagnoseScreen: undefined;
	CameraScreen: undefined;
	MyGardenScreen: undefined;
	ProfileScreen: undefined;
};

export type AuthStackParams = {
	OnboardingScreen: undefined;
	PaywallScreen: {
		defaulOption?: string;
	};
};

export type APIResponseType<T> = {
	success: boolean;
	message: string;
	data: T;
};
