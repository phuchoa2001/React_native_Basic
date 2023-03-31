import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eef6f8"
	},
	app : {
		marginTop : 80,
		flexDirection : "column" ,
		height : "100%"
	},
	title : {
		textAlign : "center",
		fontSize : 25,
		fontWeight: 600
	},
	action : {
		marginTop : 10,
		flexDirection : "row",
		paddingHorizontal : 30 ,
		alignItems : "center" ,
	},
	boxInput : {
		flex : 1
	},
	input : {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius : 8
	},
	add : {
		fontSize : 40,
		fontWeight : 600 , 
		paddingLeft : 10 
	}, 
	list : {
		marginTop : 10,
		paddingHorizontal : 30,
		marginBottom : 300,
	},
	item : {
		paddingVertical : 10,
		flexDirection : "row",
		justifyContent : "space-between",
		paddingRight : 20
	},
	itemTitle : {
		fontWeight : 700,
		color : "red"
	}
});

export default styles;