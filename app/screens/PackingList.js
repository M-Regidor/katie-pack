import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Button, ScrollView} from 'react-native'
import React from 'react'
import { storeData } from '../store/AsyncStorage'
import { useAppStore } from '../store/useAppStore'
import Category from '../components/Category'
import useToiletriesStore from '../store/useToiletriesStore'


export default function PackingList({navigation}) {
  const toiletries = require("../assets/item_icons/Toiletries.png")
  const travelDocs = require("../assets/item_icons/Travel_Documents.png")
  const username = useAppStore(state => state.username)
  const updateUsername = useAppStore(state => state.updateUsername)
  const toiletriesArray = useToiletriesStore(state => state.getToiletriesArray(state))

  const handleEnter = () => {
    updateUsername(null)
    storeData("username", "")
  }

  return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.text}>{username}'s Packing List</Text>
        <Button title='Remove username' onPress={handleEnter}/>
        <View style={styles.listContainer}>
          <ScrollView>
            <Category 
              imagePath={toiletries}
              title={"Toiletries"}
              navigation={navigation}
              itemList={toiletriesArray}
            />
            <Category 
              imagePath={travelDocs}
              title={"Travel Documents"}
              navigation={navigation}
            />
          </ScrollView>
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
    // gap: 7
  },
  listItemText:{
    fontSize: 20
  },
  text:{
    fontSize: 25,
    fontWeight: "bold"
  },
})