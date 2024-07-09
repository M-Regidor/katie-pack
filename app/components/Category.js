import { Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Category({imagePath, navigation, title, total, missing, packed}) {
    const listStats = total === 0 ? "List empty" : `${packed} / ${total}`

    if (packed === total){
        bgColor = "#689F38"
    } else if (packed >= missing) {
        bgColor = "#F9A825"
    } else if (packed < missing) {
        bgColor = "#F44336"
    }

    return (
        <TouchableOpacity onPress={()=> navigation.navigate(title)} style={[styles.categoryContainer, {backgroundColor: bgColor}]}>
            <View style={styles.iconContainer}>
                <Image source={imagePath} style={styles.iconImage}/>
                <Text style={styles.listItemText}>{title}</Text>
            </View>
            <View style={styles.countContainer}>
                <View style={styles.countDetails}>
                    <Text style={styles.countNum}>{listStats}</Text>
                    <Text style={styles.countText}>Packed</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 7,
        height: 150,
        borderRadius: 25,
    },
    iconContainer:{
        flex: 1,
        height: 110,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    listItemText:{
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },
    iconImage: {
        width: "100%",
        height: "80%",
        objectFit: "contain"
    },
    countContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    countDetails: {
        alignItems: "center",
        gap: 10
    },
    countText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    countNum: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    }
})