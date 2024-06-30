import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Item from './Item'
import useToiletriesStore from '../../store/useToiletriesStore'
import { storeObj } from '../../store/AsyncStorage'

export default function ToiletriesIndex() {
  const toiletries = useToiletriesStore(state => state.toiletries)
  const items = useToiletriesStore(state => state.getToiletriesArray(state))
  const togglePacked = useToiletriesStore(state => state.togglePacked)
  
  useEffect(()=> {
    storeObj("toiletries", toiletries)
  }, [toiletries])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Health and Beauty</Text>
      <View style={styles.listContainer}>
          {items.map((item, idx)=>(
            <Item 
              key={idx} 
              id={item.id}
              name={item.name} 
              packed={item.packed} 
              toggle={togglePacked}
            />
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