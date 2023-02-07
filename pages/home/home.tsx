import { StyleSheet, Text, ScrollView, Button, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		color: "#fff",
		alignContent: "center",
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
		color: "#fff",
		fontSize: 50,
	},
	button: {
		width: "50%",
	},
	innerbox: {
		flex: 1,
		width: "100%",
		margin: "auto",
		backgroundColor: "#1f1f1f",
		color: "#fff",
		boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
	},
});
// hate this. navigation is throwing a ts error about being implicitly any. Need to figure out datatype and change it off "any"
const Home = ({ navigation }: any): JSX.Element => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.innerbox}>
				<Text style={styles.text}>acro what?</Text>
				<Button color="#597081" title="Go to Matt's profile" onPress={() => navigation.navigate("Profile", { name: "Matt" })} />
				<Button color="#597081" title="Login" onPress={() => navigation.navigate("Login", { name: "Login" })} />
			</View>
		</ScrollView>
	);
};

export default Home;