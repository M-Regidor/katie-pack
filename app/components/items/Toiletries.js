import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Item from './Item'
import useToiletriesStore from '../../store/useToiletriesStore'

export default function ToiletriesIndex() {
  const items = useToiletriesStore(state => state.getToiletriesArray(state))
  console.log(items)
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Health and Beauty</Text>
      <View style={styles.listContainer}>
          {items.map((item, idx)=>(
            <Item key={idx} name={item.name}/>
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