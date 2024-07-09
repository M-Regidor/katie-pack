import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Button, ScrollView, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchObj, storeData } from '../store/AsyncStorage'
import { useAppStore } from '../store/useAppStore'
import Category from '../components/Category'
import useListItemsStore from '../store/useListItemsStore'
import items from "../assets/itemData.json"

const toiletriesIcon = require("../assets/item_icons/Toiletries.png")
const travelDocsIcon = require("../assets/item_icons/Travel_Documents.png")
const clothingIcon = require("../assets/item_icons/Clothing.png")
const footwearIcon = require("../assets/item_icons/footwear.png")
const financialIcon = require("../assets/item_icons/financial.png")
const electronicsIcon = require("../assets/item_icons/electronics.png")
const medicalSuppliesIcon = require("../assets/item_icons/Medical_Supplies.png")
const otherIcon = require("../assets/item_icons/other.png")

const categoriesData = [
  { title: "Toiletries", icon: toiletriesIcon, backgroundColor: "#d8bfd8", key: "toiletries" },
  { title: "Clothing", icon: clothingIcon, backgroundColor: "#696969", key: "clothing" },
  { title: "Footwear", icon: footwearIcon, backgroundColor: "#FFD700", key: "footwear" },
  { title: "Financial", icon: financialIcon, backgroundColor: "#4682B4", key: "financial" },
  { title: "Electronics", icon: electronicsIcon, backgroundColor: "#F08080", key: "electronics" },
  { title: "Medical Supplies", icon: medicalSuppliesIcon, backgroundColor: "#FF69B4", key: "medicalSupplies" },
  { title: "Travel Documents", icon: travelDocsIcon, backgroundColor: "#8B008B", key: "travelDocuments" },
  { title: "Other", icon: otherIcon, backgroundColor: "#8FBC8F", key: "other" },
];

export default function PackingList({navigation}) {
  const [isLoading, setIsLoading] = useState(true)

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
    const loadCategories = async () => {
      const categoryKeys = Object.keys(categories)
      await Promise.all(categoryKeys.map(category => fetchObj(category, setList)))
      setIsLoading(false)
    }

    loadCategories()
  }, [])

  if (!isLoading) {
    return (
        <SafeAreaView style={styles.screen}>
          <Text style={styles.text}>{username}'s Packing List</Text>
          <Button title='Remove username' onPress={handleEnter}/>
          <View style={styles.listContainer}>
            {isLoading ? <ActivityIndicator size={"large"}/> : 
             <ScrollView>
                {categoriesData.map(({title, icon, backgroundColor, key}) => (
                  <Category
                    key={key}
                    title={title}
                    backgroundColor={backgroundColor}
                    imagePath={icon}
                    navigation={navigation}
                    itemList={categories[key]}
                  />
                ))}
              </ScrollView>
            }
          </View>
        </SafeAreaView>
      )
  } else {
    <ActivityIndicator size={"large"}/>
  }

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