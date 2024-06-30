import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import { storeData } from '../store/AsyncStorage'
import { useAppStore } from '../store/userSettingsStore'
import Category from '../components/Category'


export default function PackingList({navigation}) {
  const toiletries = require("../assets/item_icons/Toiletries.png")
  const username = useAppStore(state => state.username)
  const updateUsername = useAppStore(state => state.updateUsername)

  const handleEnter = () => {
    updateUsername(null)
    storeData("username", "")
  }


  return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.text}>Packing List</Text>
        <View style={styles.listContainer}>
          <Category imagePath={toiletries} title={"Toiletries"} navigation={navigation}/>
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
  },
  listItem:{
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  listItemText:{
    fontSize: 20
  },
  text:{
    fontSize: 25,
    fontWeight: "bold"
  },
  iconImage: {
    height: 150,
    width: 150
  }
})