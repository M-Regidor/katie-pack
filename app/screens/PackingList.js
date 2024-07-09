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
  { title: "Toiletries", icon: toiletriesIcon, backgroundColor: "#F44336", key: "toiletries",},
  { title: "Clothing", icon: clothingIcon, backgroundColor: "#9CCC65", key: "clothing" },
  { title: "Footwear", icon: footwearIcon, backgroundColor: "#FFD740", key: "footwear" },
  { title: "Financial", icon: financialIcon, backgroundColor: "#757575", key: "financial" },
  { title: "Electronics", icon: electronicsIcon, backgroundColor: "thistle", key: "electronics" },
  { title: "Medical Supplies", icon: medicalSuppliesIcon, backgroundColor: "#AED581", key: "medicalSupplies" },
  { title: "Travel Documents", icon: travelDocsIcon, backgroundColor: "thistle", key: "travelDocuments" },
  { title: "Other", icon: otherIcon, backgroundColor: "#AED581", key: "other" },
];

export default function PackingList({navigation}) {
  const [isLoading, setIsLoading] = useState(true)
  const {categories, setList} = useListItemsStore(state => ({
    categories: state.categories,
    setList: state.setList
  }))
  const username = useAppStore(state => state.username)
  const updateUsername = useAppStore(state => state.updateUsername)


  
  const sorted = () => {
    const red = []
    const yellow = []
    const green = []

    categoriesData.map((category) => {
      const total = categories[category.key].length
      let packed = 0;
      let missing = 0;
      
      categories[category.key].forEach(item => {
        item.packed ? packed++ : missing++
      })
      
      if (packed === total) {
        green.push(category)
      } else if (packed >= missing) {
        yellow.push(category)
      } else if (packed < missing) {
        red.push(category)
      }
    })

    return [...red, ...yellow, ...green]
  }
  
  
  
  const handleEnter = () => {
    updateUsername(null)
    storeData("username", "")
  }
  
  
  const sortedCategories = sorted()

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
                {sortedCategories.map(({title, icon, backgroundColor, key}) => (
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