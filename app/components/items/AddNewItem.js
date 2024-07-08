import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

export default function AddNewItem({setModalOpen, category, addItem}) {
    const [newItem, setNewItem] = useState("")

    const handleAdd = () => {
        if (newItem === "") {
            Alert.alert("Invalid Input", "Item name input can not be blank")
        } else {
            // const itemData = {"name": newItem, "packed": false}
            addItem(category, newItem)
            setModalOpen(false)
        }
    }

    return (
        <View style={styles.modalContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.titleText}>Add item to {category} list</Text>
                    <TextInput 
                        style={styles.inputText}
                        placeholder='Item Name'
                        placeholderTextColor={"gray"}
                        value={newItem}
                        onChangeText={text => setNewItem(text)}
                    />
                </View>
                {/* <View style={styles.middleContainer}></View> */}
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setModalOpen(false)}>
                        <Text style={styles.buttonText} >Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleAdd}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.60)"
    },
    inputContainer: {
        flexDirection: 'column',
        width: 250,
        gap: 10
    },
    topContainer:{
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 100,
        backgroundColor: "#ffe4e1"
    },
    middleContainer:{
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "20%",
        backgroundColor: "#fff"
    },
    bottomContainer:{
        justifyContent: "space-between",
        flexDirection: "row",
        height: "20%"
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18
    },
    inputText:{
        backgroundColor: "#fff",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        borderColor: "rgba(0, 0, 0, 0.80)"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        height: 45,
        width: "48%",
        borderRadius: 12
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
})