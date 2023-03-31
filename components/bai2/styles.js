import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	top : {
		backgroundColor : "#f3fe7d",
		flex : 1,
		justifyContent : "center" ,
		alignItems : "center"
	},
	bottom : {
		backgroundColor : "#37ea7a",
		flex : 1,
		flexDirection : "row"
	},
	text : {
		fontSize : 20 ,
		fontWeight : 700 ,
		color : "#2675a8"
	},
	textSub : {
		color : "#fff",
		fontSize : 20 ,
		fontWeight : 700 
	},
	BottonLeft : {
		flex : 1,
		alignItems : "center" ,
		justifyContent : "center"
	},
	BottonRight : {
		flex : 1
	},
	RightTop : {
		flex: 2,
		backgroundColor : "#d32fcb",
		alignItems : "center" ,
		justifyContent : "center"
	},
	RightBottom : {
		flex: 1,
		backgroundColor : "#2675a9", 
		alignItems : "center" ,
		justifyContent : "center"
	}
});

export default styles;