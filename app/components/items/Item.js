import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'



export default function Item({item, removeItem, category, idx, toggle}) {
  const handleCheck = () => {
    toggle(category, idx)
  }

  return (
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
      <View flexDirection="row" gap={5} >
        <TouchableOpacity style={styles.deleteBox} onPress={e => removeItem(category, idx)}></TouchableOpacity>
        <TouchableOpacity 
          style={[styles.checkBox, item.packed ? styles.checked : null]}
          onPress={handleCheck}
        ></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  checkBox: {
    borderWidth: 2,
    borderRadius: 5,
    height: 25,
    width: 25
  },
  deleteBox: {
    backgroundColor: "red",
    borderRadius: 5,
    height: 25,
    width: 25
  },
  checked:{
    backgroundColor: "black"
  },
  unchecked:{
    backgroundColor: "#fff"
  }
})