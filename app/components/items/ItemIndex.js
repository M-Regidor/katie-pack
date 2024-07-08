import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import { storeObj } from '../../store/AsyncStorage'
import AddNewItem from './AddNewItem'
import useListItemsStore from '../../store/useListItemsStore'

export default function ItemIndex({category, title}) {
  const [modalOpen, setModalOpen] = useState(false)

  // const title = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const {itemList, removeItem, addItem, togglePacked} = useListItemsStore(state => ({
    itemList: state.categories[category],
    removeItem: state.removeItem,
    addItem: state.addItem,
    togglePacked: state.togglePacked
  }))

  useEffect(() => {
    storeObj(category, itemList)
  }, [itemList])

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Text style={styles.title}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listContainer}>
          {itemList.map((item, idx)=>(
            <Item 
              key={idx}
              category={category}
              item={item}
              idx={idx}
              removeItem={removeItem}
              toggle={togglePacked}
            />
          ))}
      </ScrollView>
      <Modal
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        animationType='fade'
        transparent={true}
      >
        <AddNewItem setModalOpen={setModalOpen} category={category} addItem={addItem}/>
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