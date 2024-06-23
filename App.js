import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert} from 'react-native';


export default function App() {
  const logo = require("./assets/app_images/katie-pack-logo-cropped.png")
  const handle_press = () => {
    console.log("hello world")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo}/>
      {/* <Text onPress={handle_press}>Hello World</Text> */}
      <Button
        color="green"
        title='Get Started'
        onPress={()=> Alert.alert("Welcome to Katie Pack!")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
