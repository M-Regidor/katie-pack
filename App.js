import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PackingList from './app/screens/PackingList';
import { useEffect,} from 'react';
import { fetchData, fetchObj, } from './app/store/AsyncStorage';
import { useAppStore } from './app/store/useAppStore';
import ItemIndex from './app/components/items/ItemIndex';

const Stack = createNativeStackNavigator();

export default function App() {
  const {username, setUsername} = useAppStore(state => ({
    username: state.username,
    setUsername: state.updateUsername
  }))


  useEffect(()=>{
    fetchData("username", setUsername)
  }, [])

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
          <Stack.Screen name="Toiletries">
            {() => <ItemIndex title={"Toiletries"} category={"toiletries"}/>}
          </Stack.Screen>
          <Stack.Screen name="Travel Documents">
            {() => <ItemIndex title={"Travel Documents"} category={"travelDocuments"}/>}
          </Stack.Screen>
          <Stack.Screen name="Clothing">
            {() => <ItemIndex title={"Clothing"} category={"clothing"}/>}
          </Stack.Screen> 
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}