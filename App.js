import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect,} from 'react';
import { fetchData, fetchObj, } from './app/store/AsyncStorage';
import { useAppStore } from './app/store/useAppStore';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PackingList from './app/screens/PackingList';
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
    !username ? 
    (<WelcomeScreen />) : (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Packing List"
        >
          <Stack.Screen name="Packing List" options={{headerShown: false}} >
            {(props) => <PackingList {...props}/>}
          </Stack.Screen>
          <Stack.Screen name="Toiletries" 
            options={headerOptions}>
            {() => <ItemIndex title={"Toiletries"} category={"toiletries"}/>}
          </Stack.Screen>
          <Stack.Screen name="Travel Documents" options={headerOptions}>
            {() => <ItemIndex title={"Travel Documents"} category={"travelDocuments"}/>}
          </Stack.Screen>
          <Stack.Screen name="Clothing" options={headerOptions}>
            {() => <ItemIndex title={"Clothing"} category={"clothing"}/>}
          </Stack.Screen>
          <Stack.Screen name="Footwear" options={headerOptions}>
            {() => <ItemIndex title={"Footwear"} category={"footwear"}/>}
          </Stack.Screen>
          <Stack.Screen name="Financial" options={headerOptions}>
            {() => <ItemIndex title={"Financial"} category={"financial"}/>}
          </Stack.Screen>
          <Stack.Screen name="Electronics" options={headerOptions}>
            {() => <ItemIndex title={"Electronics"} category={"electronics"}/>}
          </Stack.Screen>
          <Stack.Screen name="Medical Supplies" options={headerOptions}>
            {() => <ItemIndex title={"Medical Supplies"} category={"medicalSupplies"}/>}
          </Stack.Screen>
          <Stack.Screen name="Other" options={headerOptions}>
            {() => <ItemIndex title={"Other"} category={"other"}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

const headerOptions = {
  headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: "#524F81", 
      borderBottomWidth: 0,
      shadowOpacity: 0,
      elevation: 0
  }
}