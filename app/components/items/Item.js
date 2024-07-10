import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan, faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'



export default function Item({item, removeItem, category, idx, toggle}) {
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
          <FontAwesomeIcon icon={item.packed ? faCircleCheck : faCircleXmark} size={30}/>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(category, idx)}>
          <FontAwesomeIcon icon={faTrashCan} size={20}/>
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