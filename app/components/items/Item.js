import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useState } from 'react'
import { useAppStore } from '../../store/useAppStore'

// const checked = require("../../assets/app_images/checked.png")
// const unchecked = require("../../assets/app_images/unchecked.png")


export default function Item({item, removeItem, category, idx, toggle}) {
  const {checked, unchecked, setIsLoading} = useAppStore(state => ({
    checked: state.checked,
    unchecked: state.unchecked,
    setIsLoading: state.setLoading
  }))

  // setIsLoading(true)

  const handleCheck = () => {
    toggle(category, idx)
  }

  const handleImageLoad = () => {
    // console.log(`Image for item ${item.name} loaded`);
    setIsLoading(false)
  }

  return (
    <View style={styles.listItem}>
        <TouchableOpacity 
          style={styles.checkBox}
          onPress={handleCheck}
        > 
          <Image 
            source={item.packed ? checked : unchecked} 
            style={styles.checkIcon} 
            onLoad={handleImageLoad}/>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(category, idx)}>
          <FontAwesomeIcon icon={faTrashCan} size={23}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    gap: 15,
    height: "100%",
    width: "90%"
  },
  checkIcon: {
    height: 30,
    width: 30
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18
  }
})