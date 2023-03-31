import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
	},
	top: {
		flex: 1,
	},
	textTop: {
		marginHorizontal: 10,
		marginTop: 10,
		padding: 20,
		borderColor: "blue",
		borderWidth: 2,
		backgroundColor: "#fff" ,
		fontSize : 20,
		fontWeight : 700
	},
	containerCenter : {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	center: {
		width: 150,
		height: 150,
		backgroundColor: "green",
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center"
	},
	bottom: {
		flex: 1,
		justifyContent : "flex-end"
	},
	textBottom : {
		marginHorizontal: 10,
		marginBottom: 30,
		padding: 20,
		borderColor: "blue",
		borderWidth: 2,
		backgroundColor: "#fff" ,
		textAlign : "right" ,
		fontSize : 20,
		fontWeight : 700
	}
});

export default styles;