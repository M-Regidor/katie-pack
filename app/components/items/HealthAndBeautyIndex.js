import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Item from './Item'

export default function HealthAndBeautyIndex() {
  const items = [
    "Hairbrush",
    "Razor",
    "Contacts",
    "Tooth Brush",
    "Tooth Paste",
    "Floss",
    "Eye drops",
    "Hair Straightener"
  ]

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Health and Beauty</Text>
      <View style={styles.listContainer}>
          {items.map((itemName, idx)=>(
            <Item key={idx} name={itemName}/>
          ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    gap: 20
  },
  title:{
    fontSize: 25,
    fontWeight: "bold"
  },
  listContainer:{
    flex: 1,
    gap: 5
  },
})