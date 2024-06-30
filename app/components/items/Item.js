import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'



export default function Item({id, name, packed, toggle}) {
  const handleCheck = () => {
    toggle(id)
  }

  return (
    <View style={styles.listItem}>
      <Text>{name}</Text>
      <TouchableOpacity 
        style={[styles.checkBox, packed ? styles.checked : null]}
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
    paddingHorizontal: 10
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