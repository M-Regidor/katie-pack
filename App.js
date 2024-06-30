import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PackingList from './app/screens/PackingList';
import { useEffect,} from 'react';
import { fetchData, } from './app/store/AsyncStorage';
import { useAppStore } from './app/store/userSettingsStore';
import useListStore from './app/store/useItemsStore';
import ToiletriesIndex from './app/components/items/Toiletries';

const Stack = createNativeStackNavigator();

export default function App() {
  const username = useAppStore(state => state.username)
  const setUsername = useAppStore(state => state.updateUsername)
  const setToiletries = useListStore(state => state.loadLocalToiletries)

  useEffect(()=>{
    fetchData("username", setUsername)
    setToiletries()
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