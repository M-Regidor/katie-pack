import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import UpcomingTrips from './app/screens/UpcomingTrips';
import PackingList from './app/screens/PackingList';
import HealthAndBeautyIndex from "./app/components/items/HealthAndBeautyIndex"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" options={{headerShown: false}} component={WelcomeScreen}/>
        <Stack.Screen name="Packing List"  options={{headerShown: false}} component={PackingList}/>
        <Stack.Screen name="Health and Beauty" component={HealthAndBeautyIndex}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}