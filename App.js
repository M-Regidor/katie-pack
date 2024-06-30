import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PackingList from './app/screens/PackingList';
import { useEffect,} from 'react';
import { fetchData, fetchObj, } from './app/store/AsyncStorage';
import { useAppStore } from './app/store/useAppStore';
import ToiletriesIndex from './app/components/items/ToiletriesIndex';
import useToiletriesStore from './app/store/useToiletriesStore';

const Stack = createNativeStackNavigator();

export default function App() {
  const username = useAppStore(state => state.username)
  const setUsername = useAppStore(state => state.updateUsername)
  const setToiletries = useToiletriesStore(state => state.setToiletries)

  useEffect(()=>{
    fetchData("username", setUsername)
    fetchObj("toiletries", setToiletries)
  }, [username])

  return (
    username === null ? 
    (<WelcomeScreen />) : (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Packing List"
        >
          <Stack.Screen name="Packing List" options={{headerShown: false}} >
            {(props) => <PackingList {...props}/>}
          </Stack.Screen>   
          <Stack.Screen name="Toiletries" component={ToiletriesIndex}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}