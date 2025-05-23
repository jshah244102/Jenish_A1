import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import HomeScreen from './components/Screens/HomeScreen';
import Header from './components/Header';
import styles from './components/Styles';

export default function App() {
  /// Now we will use the stack navigator
  return (
    <View style={styles.container}>
      <Header />
      <HomeScreen />
    </View>
  );
}


