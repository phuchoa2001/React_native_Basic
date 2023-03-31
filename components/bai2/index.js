import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './styles';

export default function Bai2() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.text}>Top left</Text>
			</View>
			<View style={styles.bottom}>
				<View style={styles.BottonLeft}>
					<Text style={styles.text}>Bottom left</Text>
				</View>
				<View style={styles.BottonRight}>
					<View style={styles.RightTop}>
						<Text style={styles.textSub}>Right Top</Text>
					</View>
					<View style={styles.RightBottom}>
						<Text style={styles.textSub}>Right Bottom</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

