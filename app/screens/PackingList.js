import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Button, ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { fetchObj, storeData } from '../store/AsyncStorage'
import { useAppStore } from '../store/useAppStore'
import Category from '../components/Category'
import useListItemsStore from '../store/useListItemsStore'
import items from "../assets/itemData.json"


export default function PackingList({navigation}) {
  const toiletriesIcon = require("../assets/item_icons/Toiletries.png")
  const travelDocs = require("../assets/item_icons/Travel_Documents.png")
  
  const username = useAppStore(state => state.username)
  const updateUsername = useAppStore(state => state.updateUsername)

  const {categories, setList} = useListItemsStore(state => ({
      categories: state.categories,
      setList: state.setList
  }))


  const handleEnter = () => {
    updateUsername(null)
    storeData("username", "")
  }
  
  useEffect(() => {
    const categories = Object.keys(items)
    categories.forEach(category => fetchObj(category, setList))
  }, [])

  return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.text}>{username}'s Packing List</Text>
        <Button title='Remove username' onPress={handleEnter}/>
        <View style={styles.listContainer}>
          <ScrollView>
            <Category 
              imagePath={toiletriesIcon}
              title={"Toiletries"}
              navigation={navigation}
              itemList={categories.toiletries}
            />
            <Category 
              imagePath={travelDocs}
              title={"Travel Documents"}
              navigation={navigation}
              itemList={categories.travelDocuments}
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