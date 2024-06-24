import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


export default function Item({name}) {
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <View style={styles.listItem}>
      <Text>{name}</Text>
      <TouchableOpacity 
        style={[styles.checkBox, checked ? styles.checked : null]}
        onPress={handleCheck}
      ></TouchableOpacity>
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
    paddingHorizontal: 15
  },
  checkBox: {
    borderWidth: 2,
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