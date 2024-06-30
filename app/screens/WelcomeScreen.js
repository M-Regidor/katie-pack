import React, { useState } from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, Text, TextInput, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storeData, storeObj } from '../store/AsyncStorage';
import { useAppStore } from '../store/useAppStore';
import items from "../assets/itemData.json"



function WelcomeScreen() {
    const logo = require("../assets/app_images/katie-pack-logo-cropped.png")
    const [newName, setNewName] = useState("")
    const updateUsername = useAppStore(state => state.updateUsername)
    // console.log(items.Toiletries[1])

    const handleEnter = async () => {
        if (newName === "") {
            Alert.alert("Invalid Input", "Name input can not be blank")
        } else {
            updateUsername(newName)
            storeData("username", newName)
            storeObj("toiletries", items.Toiletries)
        }
    }

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Image source={logo}/>
            </View>
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.inputText}>Welcome!</Text>
                    <Text style={styles.inputText}>Please enter your name</Text>
                </View>
                <TextInput 
                    style={styles.input}
                    value={newName}
                    onChangeText={text => setNewName(text)}
                />
            </View>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={handleEnter}
                >
                    <Text style={styles.buttonText}>Enter</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems:"center"
    },
    container: {
        flex:0.2,
        // borderWidth: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
    },
    loginButton: {
        backgroundColor: "#8fbc8f",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    input: {
        borderRadius: 15,
        borderWidth: 1,
        width: "55%",
        height: 35,
        paddingLeft: 10
    },
    inputText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    welcomeContainer: {
        flexDirection: "column",
        alignItems: "center"
    }

})

export default WelcomeScreen;