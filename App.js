import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  Button, 
  Alert} from 'react-native';

export default function App() {
  return (
    <WelcomeScreen/>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'top',
//   },
// });
