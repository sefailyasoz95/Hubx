import { Provider } from "react-redux";
import Main from "./Main";
import { store } from "./src/redux/store";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default function App() {
	return (
		<Provider store={store}>
			<StatusBar animated style='auto' />
			<Main />
		</Provider>
	);
}
