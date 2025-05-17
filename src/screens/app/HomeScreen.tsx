import { ActivityIndicator, FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontedText from "../../components/FontedText";
import { responsiveFontSize, responsiveSpacing } from "../../utils/helpers";
import { Image } from "expo-image";
import { DEVICE_WIDTH } from "../../utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getCategories, getQuestions } from "../../redux/actions";
import Animated, { FadeInLeft, FadeInUp } from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TabStackParams } from "../../utils/types";

type Props = NativeStackScreenProps<TabStackParams, "HomeScreen">;
const debounceTimeout = 500;
const HomeScreen = ({ navigation, route }: Props) => {
	const questions = useAppSelector((state) => state.global.questions);
	const categories = useAppSelector((state) => state.global.categories);
	const loadingCategories = useAppSelector((state) => state.global.loadingCategories);
	const loadingQuestions = useAppSelector((state) => state.global.loadingQuestions);
	const dispatch = useAppDispatch();
	const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
	const [filterableCategories, setFilterableCategories] = useState(categories);

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getQuestions());
	}, []);
	useEffect(() => {
		let timeout = undefined as any;
		setTimeout(() => {
			if (searchValue && categories.length) {
				let filtered = categories.filter(
					(cat) =>
						cat.title.toLowerCase().includes(searchValue.toLowerCase()) ||
						cat.name.toLowerCase().includes(searchValue.toLowerCase())
				);
				setFilterableCategories(filtered);
			} else {
				setFilterableCategories(categories);
			}
		}, debounceTimeout);

		return () => {
			clearTimeout(timeout);
		};
	}, [searchValue, categories]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={[1]}
				renderItem={() => (
					<>
						<Animated.View style={styles.paddingH} entering={FadeInUp.delay(50)}>
							<FontedText text='Hi, plant lover!' fontWeight='light' style={styles.hi} />
							<FontedText text='Good Afternoon! ⛅️' fontWeight='medium' style={styles.good} />
							<View style={styles.searchArea}>
								<Ionicons name='search' size={18} color={"#3C3C4399"} />
								<TextInput
									placeholder='search for plants'
									placeholderTextColor={"#AFAFAF"}
									onChangeText={setSearchValue}
								/>
							</View>
							<Image
								source={require("../../assets/images/home-header.png")}
								style={styles.headerImg}
								contentFit='contain'
							/>
						</Animated.View>
						<TouchableOpacity>
							<Image source={require("../../assets/images/home-cta.png")} style={styles.cta} contentFit='contain' />
						</TouchableOpacity>
						<View>
							<FontedText text='Get Started' fontWeight='medium' style={styles.getStarted} />
							{loadingQuestions ? (
								<ActivityIndicator size={50} />
							) : (
								<FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									data={questions}
									style={styles.paddingH}
									snapToAlignment='start'
									snapToInterval={DEVICE_WIDTH * 0.64 + 30}
									renderItem={({ item, index }) => (
										<Animated.View style={styles.questionItem} key={index} entering={FadeInLeft.delay(index * 100)}>
											<Image source={{ uri: item.image_uri }} style={styles.questionImage} contentFit='cover' />
											<FontedText text={item.title} style={styles.questionTitle} fontWeight='medium' />
										</Animated.View>
									)}
									ListEmptyComponent={() => <FontedText text='There is no question to show right now!' />}
								/>
							)}
						</View>
						<View>
							{loadingCategories ? (
								<ActivityIndicator size={50} />
							) : (
								<FlatList
									showsHorizontalScrollIndicator={false}
									data={filterableCategories}
									style={styles.paddingH}
									numColumns={2}
									renderItem={({ item, index }) => (
										<Animated.View style={styles.categoryItem} key={index} entering={FadeInLeft.delay(index * 100)}>
											<FontedText text={item.title} style={styles.categoryTitle} fontWeight='medium' />
											<Image source={{ uri: item.image.url }} style={styles.questionImage} contentFit='cover' />
										</Animated.View>
									)}
									ListEmptyComponent={() => <FontedText text='There is no category to show right now!' />}
								/>
							)}
						</View>
					</>
				)}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fafafa",
		overflow: "scroll",
		flex: 1,
	},
	hi: {
		fontSize: responsiveFontSize(16),
		marginBottom: 5,
	},
	good: {
		fontSize: responsiveFontSize(24),
	},
	headerImg: {
		width: DEVICE_WIDTH,
		height: 150,
		position: "absolute",
		alignSelf: "center",
		zIndex: -1,
		top: 0,
	},
	cta: {
		width: DEVICE_WIDTH * 0.88,
		height: responsiveSpacing(130),
		alignSelf: "center",
	},
	searchArea: {
		backgroundColor: "rgba(255,255,255,0.9)",
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderWidth: 0.3,
		borderColor: "#3C3C4340",
		flexDirection: "row",
		gap: 8,
	},
	getStarted: {
		fontSize: responsiveFontSize(15),
		lineHeight: 20,
		letterSpacing: -0.24,
		marginBottom: 22,
		paddingHorizontal: responsiveSpacing(24),
	},
	questionItem: {
		width: DEVICE_WIDTH * 0.64,
		height: responsiveSpacing(164),
		borderRadius: 12,
		marginRight: 8,
	},
	questionImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
		borderRadius: 12,
	},
	questionTitle: {
		color: "white",
		marginTop: "auto",
		marginBottom: responsiveSpacing(15),
		fontSize: responsiveFontSize(15),
		lineHeight: 20,
		paddingHorizontal: responsiveSpacing(12),
	},
	categoryItem: {
		width: DEVICE_WIDTH * 0.43,
		height: responsiveSpacing(164),
		borderRadius: 12,
		alignSelf: "center",
		backgroundColor: "rgba(41, 187, 137, 0.03)",
		borderWidth: 1,
		borderColor: "#f0f0f0",
		marginRight: responsiveSpacing(8),
		marginVertical: responsiveSpacing(8),
	},
	categoryTitle: {
		padding: responsiveSpacing(18),
		fontSize: responsiveFontSize(16),
		lineHeight: 21,
		color: "#13231B",
	},
	paddingH: {
		paddingHorizontal: responsiveSpacing(24),
	},
});
