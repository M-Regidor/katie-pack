import { Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function Category({imagePath, navigation, title, total, missing, packed}) {
    const listStats = total === 0 ? "List empty" : `${packed} / ${total}`

    if (total === 0){
        bgColor = "black"
    } else if (packed === total) {
        bgColor = "#689F38"
    } else if (packed >= missing) {
        bgColor = "#F9A825"
    } else if (packed < missing) {
        bgColor = "#F44336"
    }

    return (
        <LinearGradient
            colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.30)']}
            style={styles.backGround}
        >
            <TouchableOpacity onPress={()=> navigation.navigate(title)} style={styles.categoryContainer}>
                <View style={styles.iconContainer}>
                    <Image source={imagePath} style={styles.iconImage}/>
                    <Text style={styles.listItemText}>{title}</Text>
                </View>
                <View style={styles.countContainer}>
                    <View style={styles.countDetails}>
                        <Text style={[
                            styles.countNum,
                            {color: bgColor},
                            listStats === "List empty" && {fontSize: 20}
                        ]}
                        >
                            {listStats}
                        </Text>
                        <Text style={[styles.countText,]}>Packed</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    backGround: {
        height: 95,
        borderRadius: 25,
        marginTop: 15,
        alignItems: "center",
    },
    categoryContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%"
    },
    iconContainer:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    listItemText:{
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    iconImage: {
        width: "100%",
        height: "70%",
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
        fontSize: 15,
        fontWeight: "bold",
    },
    countNum: {
        fontSize: 25,
        fontWeight: "bold",
    }
})