import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import UpcomingTrips from './app/screens/UpcomingTrips';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" options={{headerShown: false}} component={WelcomeScreen}/>
        <Stack.Screen name="Trips"  component={UpcomingTrips}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}