import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function PackingList({navigation, name, setName}) {
  const health = require("../assets/app_images/health_and_beauty.png")

  return (
      <SafeAreaView style={styles.screen}>
        <View>
          <Text>Hello, {name}</Text>
        </View>
        <Text style={styles.text}>Packing List</Text>
        <View style={styles.listContainer}>
          <TouchableOpacity 
            style={styles.listItem}
            onPress={()=> navigation.navigate("Health and Beauty")}
          >
            <Image source={health} ></Image>
            <Text style={styles.listItemText}>Health and Beauty</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    gap: 20
  },
  listContainer:{
    flex: 1,
  },
  listItem:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderRadius: 10
  },
  listItemText:{
    fontSize: 20
  },
  text:{
    fontSize: 25,
    fontWeight: "bold"
  }
})