import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useState } from 'react'
import { useAppStore } from '../../store/useAppStore'
import { LinearGradient } from 'expo-linear-gradient'

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
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.30)']}
      style={styles.listItem}
    >
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
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  listItem:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    height: 60,
    borderRadius: 25,
    paddingHorizontal: 15
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