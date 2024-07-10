import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import { storeObj } from '../../store/AsyncStorage'
import AddNewItem from './AddNewItem'
import useListItemsStore from '../../store/useListItemsStore'
import { LinearGradient } from 'expo-linear-gradient'


export default function ItemIndex({category, title}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)


  const {itemList, removeItem, addItem, togglePacked} = useListItemsStore(state => ({
    itemList: state.categories[category],
    removeItem: state.removeItem,
    addItem: state.addItem,
    togglePacked: state.togglePacked
  }))

  useEffect(() => {
    storeObj(category, itemList)
  }, [itemList])

  
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"}/>
      </View>
    )
  } else {
    return (
      <LinearGradient
      
        colors={["#524F81", "#B6B5D8"]}
        style={styles.screen}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <Text style={styles.title}>+</Text>
          </TouchableOpacity>
        </View>
        {itemList.length === 0 ? <Text>{title} list is empty</Text> : 
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
        }
        <Modal
          visible={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          animationType='fade'
          transparent={true}
        >
          <AddNewItem setModalOpen={setModalOpen} category={category} addItem={addItem}/>
        </Modal>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    paddingHorizontal: 25
  },
  title:{
    fontSize: 25,
    fontWeight: "bold"
  },
  listContainer:{
    // width: "100%",
    marginHorizontal: 15,
  },
})