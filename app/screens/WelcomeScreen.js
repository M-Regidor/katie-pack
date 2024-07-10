import React, { useState } from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, Text, TextInput, Alert, Switch} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { removeItem, storeData, storeObj } from '../store/AsyncStorage';
import { useAppStore } from '../store/useAppStore';
import items from "../assets/itemData.json"



function WelcomeScreen() {
    const logo = require("../assets/app_images/katie-pack-logo-cropped.png")
    const [newName, setNewName] = useState("")
    const [usePreset, setUsePreset] = useState(true)
    const updateUsername = useAppStore(state => state.updateUsername)

    const handleEnter = async () => {
        if (newName === "") {
            Alert.alert("Invalid Input", "Name input can not be blank")
        } else {
            updateUsername(newName)
            storeData("username", newName)
            const categories = Object.keys(items)
            
            if (usePreset) {
                for (const category of categories) {
                    storeObj(category, items[category])
                }
            } else {
                for (const category of categories) {
                    removeItem(category)
                }
            }
        }
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={{flex: 1, justifyContent: "center"}}>
                <Image source={logo}/>
            </View>
            <View style={styles.container}>
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 30, fontWeight:'bold'}}>Welcome!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={{paddingLeft: 5, marginBottom: 5}}>Username</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Create a username'
                            value={newName}
                            onChangeText={text => setNewName(text)}
                        />
                    </View>
                    <View style={styles.presetContainer}>
                        <Text style={styles.inputText}>Preset packing list</Text>
                        <Switch
                            value={usePreset}
                            onValueChange={() => setUsePreset(!usePreset)}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleEnter}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        alignItems:"center"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        // borderWidth: 1,
        width: "65%"
    },
    loginButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8fbc8f",
        borderRadius: 25,
        height: 50
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    inputContainer: {
        // borderWidth: 1,
        width: "100%",
        height: 250,
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    input: {
        borderRadius: 25,
        borderWidth: 1,
        // width: "50%",
        height: 35,
        paddingLeft: 10
    },
    inputText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    presetContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default WelcomeScreen;