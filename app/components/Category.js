import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Category({imagePath, navigation, title}) {
  return (
    <TouchableOpacity 
        style={styles.categoryContainer}
        onPress={()=> navigation.navigate(title)}
    >
        <Image source={imagePath} style={styles.iconImage}/>
        <Text style={styles.listItemText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    categoryContainer:{
        height: 150,
        width: 150,
        // borderWidth: 1,
        // borderRadius: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    listItemText:{
        fontSize: 20
    },
    iconImage: {
        width: "100%",
        height: "90%"
    }
})