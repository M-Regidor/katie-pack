import { View, Text, SafeAreaView, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchObj, storeData } from '../store/AsyncStorage'
import { useAppStore } from '../store/useAppStore'
import Category from '../components/Category'
import useListItemsStore from '../store/useListItemsStore'
import { ScreenContext } from 'react-native-screens'
import ScreenHeader from '../components/ScreenHeader'



const toiletriesIcon = require("../assets/item_icons/Toiletries.png")
const travelDocsIcon = require("../assets/item_icons/Travel_Documents.png")
const clothingIcon = require("../assets/item_icons/Clothing.png")
const footwearIcon = require("../assets/item_icons/footwear.png")
const financialIcon = require("../assets/item_icons/financial.png")
const electronicsIcon = require("../assets/item_icons/electronics.png")
const medicalSuppliesIcon = require("../assets/item_icons/Medical_Supplies.png")
const otherIcon = require("../assets/item_icons/other.png")

const categoriesData = [
  { title: "Toiletries", icon: toiletriesIcon, key: "toiletries",},
  { title: "Clothing", icon: clothingIcon,  key: "clothing" },
  { title: "Footwear", icon: footwearIcon, key: "footwear" },
  { title: "Financial", icon: financialIcon, key: "financial" },
  { title: "Electronics", icon: electronicsIcon, key: "electronics" },
  { title: "Medical Supplies", icon: medicalSuppliesIcon, key: "medicalSupplies" },
  { title: "Travel Documents", icon: travelDocsIcon, key: "travelDocuments" },
  { title: "Other", icon: otherIcon, key: "other" },
];

export default function PackingList({navigation}) {
  const [isLoading, setIsLoading] = useState(true)
  const {categories, setList} = useListItemsStore(state => ({
    categories: state.categories,
    setList: state.setList
  }))
  const username = useAppStore(state => state.username)
  const updateUsername = useAppStore(state => state.updateUsername)


  
  const sortCategories = () => {
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
        green.push({...category, total, packed, missing})
      } else if (packed >= missing) {
        yellow.push({...category, total, packed, missing})
      } else if (packed < missing) {
        red.push({...category, total, packed, missing})
      }
    })

    return [...red, ...yellow, ...green]
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
          <ScreenHeader username={username}/>
          <View style={styles.listContainer}>
            {isLoading ? <ActivityIndicator size={"large"}/> : 
             <ScrollView>
                {sortCategories().map(({title, icon, key, total, missing, packed}) => (
                  <Category
                    key={key}
                    title={title}
                    imagePath={icon}
                    navigation={navigation}
                    total={total}
                    missing={missing}
                    packed={packed}
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
  },
  listItemText:{
    fontSize: 20
  },
})