import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Item from './Item'
import useToiletriesStore from '../../store/useToiletriesStore'
import { storeObj } from '../../store/AsyncStorage'

export default function ToiletriesIndex() {
  const { toiletries, items, togglePacked } = useToiletriesStore(state => ({
    toiletries: state.toiletries,
    items: state.getToiletriesArray(state),
    togglePacked: state.togglePacked
  }))
  
  
  useEffect(()=> {
    storeObj("toiletries", toiletries)
  }, [toiletries])

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Toiletries</Text>
        <TouchableOpacity>
          <Text style={styles.title}>+</Text>
        </TouchableOpacity>
      </View>
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
  header:{
    flexDirection: "row",
    // borderWidth:1,
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 15
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