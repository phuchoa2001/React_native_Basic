import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './styles';

export default function Bai1() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.textTop}>Top ssLeft</Text>
			</View>
			<View style={styles.containerCenter}>
				<View style={styles.center}>
					<Text style={styles.textCenter}>Center</Text>
				</View>
			</View>
			<View style={styles.bottom}>
				<Text style={styles.textBottom}>Bottom right</Text>
			</View>
		</View>
	);
}

