import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import useToiletriesStore from '../../store/useToiletriesStore'
import { storeObj } from '../../store/AsyncStorage'
import AddNewItem from './AddNewItem'

export default function ToiletriesIndex() {
  const [modalOpen, setModalOpen] = useState(false)

  const { toiletries, items, togglePacked, addItem } = useToiletriesStore(state => ({
    toiletries: state.toiletries,
    items: state.getToiletriesArray(state),
    togglePacked: state.togglePacked,
    addItem: state.addToiletries
  }))
  
 
  
  useEffect(()=> {
    storeObj("toiletries", toiletries)
  }, [toiletries])

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Toiletries</Text>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
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
      <Modal
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        animationType='fade'
        transparent={true}
      >
        <AddNewItem setModalOpen={setModalOpen} title={"toiletries"} addItem={addItem}/>
      </Modal>
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