import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, ActivityIndicator, TextInput, Alert, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Item from './Item'
import { storeObj } from '../../store/AsyncStorage'
import useListItemsStore from '../../store/useListItemsStore'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default function ItemIndex({category, title}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [newItemName, setNewItemName] = useState("")
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [inputMargin, setInputMargin] = useState(50)


  const handleNewItem = () => {
    if (newItemName === "") {
      Alert.alert("Invalid Item name", "Please give item a name")
    } else {
      addItem(category, newItemName)
      setNewItemName("")
      Keyboard.dismiss()
    }
  }

  const {itemList, removeItem, addItem, togglePacked} = useListItemsStore(state => ({
    itemList: state.categories[category],
    removeItem: state.removeItem,
    addItem: state.addItem,
    togglePacked: state.togglePacked
  }))


  useEffect(() => {
    storeObj(category, itemList)
  }, [itemList])


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      setInputMargin(e.endCoordinates.height + 10)
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setInputMargin(50)
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["#524F81", "#B6B5D8"]}
        style={styles.screen}
      >
        <KeyboardAvoidingView 
          style={{flex: 1}}
          keyboardVerticalOffset={500}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
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
          <View style={[styles.newItemContainer, {marginBottom: inputMargin}]}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.newInputBox}
                value={newItemName}
                placeholder='Add new item'
                placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                onChangeText={text => setNewItemName(text)}
              />
              <TouchableOpacity style={styles.addButton} onPress={handleNewItem}>
                <FontAwesomeIcon icon={faPlus} size={20}/> 
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
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
    marginHorizontal: 15,
  },
  newItemContainer:{
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    // marginBottom: 50,
    // backgroundColor: "rgba(255, 255, 255, 0)"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  newInputBox:{
    fontSize: 16,
    width: "80%",
    padding: 15,
    height: 50,
    borderWidth: 2.5,
    borderRadius: 25,
    borderColor: "rgba(0, 0, 0, 0.6)"
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2.5,
    width: 50,
    height: 50,
    borderRadius: 50
  }
})