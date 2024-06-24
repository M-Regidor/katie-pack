import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function TripItem({tripName}) {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{tripName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "mistyrose",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 180,
        borderRadius: 10
    },
    text:{
        fontSize: 20
    }
})