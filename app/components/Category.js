import { Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Category({imagePath, navigation, title, itemList, backgroundColor}) {
    let total = 0
    let packed = 0
    let missing = 0
    
    if (itemList) {
        total = itemList.length
        itemList.forEach(item => {
            item.packed ? packed ++ : missing ++    
        });        
    }

    return (
        <TouchableOpacity onPress={()=> navigation.navigate(title)} style={[styles.categoryContainer, {backgroundColor}]}>
            <View style={styles.iconContainer}>
                <Image source={imagePath} style={styles.iconImage}/>
                <Text style={styles.listItemText}>{title}</Text>
            </View>
            <View style={styles.countContainer}>
                <View style={styles.countDetails}>
                    <Text style={styles.countNum}>{packed}</Text>
                    <Text style={styles.countText}>Packed</Text>
                </View>
                <View style={styles.countDetails}>
                    <Text style={styles.countNum}>{missing}</Text>
                    <Text style={styles.countText}>Missing</Text>
                </View>
                <View style={styles.countDetails}>
                    <Text style={styles.countNum}>{total}</Text>
                    <Text style={styles.countText}>Total</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 7,
        height: 150,
        borderRadius: 10,
        padding: 5
        // backgroundColor: "#d8bfd8"
    },
    iconContainer:{
        height: 110,
        width: 120,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    listItemText:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    iconImage: {
        width: "100%",
        height: "80%",
        objectFit: "contain"
    },
    countContainer: {
        width: 265,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    countDetails: {
        alignItems: "center",
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