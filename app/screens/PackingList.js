import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import { storeData } from '../store/AsyncStorage'
import { useAppStore } from '../store/userSettingsStore'


export default function PackingList({navigation}) {
  const health = require("../assets/app_images/health_and_beauty.png")
  const username = useAppStore(state => state.username)
  const updateUsername = useAppStore(state => state.updateUsername)

  const handleEnter = () => {
    updateUsername(null)
    storeData("username", "")
  }


  return (
      <SafeAreaView style={styles.screen}>
        <View>
          <Text>Hello, {username}</Text>
          <Button 
            title='Remove username'
            onPress={handleEnter}
          />
        </View>
        <Text style={styles.text}>Packing List</Text>
        <View style={styles.listContainer}>
          <TouchableOpacity 
            style={styles.listItem}
            onPress={()=> navigation.navigate("Toiletries")}
          >
            <Image source={health} ></Image>
            <Text style={styles.listItemText}>Health and Beauty</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    gap: 20
  },
  listContainer:{
    flex: 1,
  },
  listItem:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderRadius: 10
  },
  listItemText:{
    fontSize: 20
  },
  text:{
    fontSize: 25,
    fontWeight: "bold"
  }
})