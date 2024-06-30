import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import UpcomingTrips from './app/screens/UpcomingTrips';
import PackingList from './app/screens/PackingList';
import HealthAndBeautyIndex from "./app/components/items/HealthAndBeautyIndex"
import { useEffect, useState } from 'react';
import { fetchData } from './app/AsyncStroage';
import { useUserSettingsStore } from './app/store/userSettingsStore';

const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState("")
  const username = useUserSettingsStore(state => state.username)
  console.log(username)
  useEffect(()=>{
    fetchData("username", setName)
  },[])

  return (
    name === null ? 
    (<WelcomeScreen setName={setName}/>) : (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Packing List"
        >
          <Stack.Screen name="Packing List" options={{headerShown: false}} >
            {(props) => <PackingList {...props} name={name} setName={setName}/>}
          </Stack.Screen>   
          <Stack.Screen name="Health and Beauty" component={HealthAndBeautyIndex}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}