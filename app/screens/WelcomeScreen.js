import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, TextInput, Alert, Switch, Keyboard} from 'react-native';
import { removeItem, storeData, storeObj } from '../store/AsyncStorage';
import { useAppStore } from '../store/useAppStore';
import items from "../assets/itemData.json"
import { LinearGradient } from 'expo-linear-gradient';



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
            Keyboard.dismiss()
            
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
            <LinearGradient
                colors={["#524F81", "#B6B5D8"]}
                style={styles.background}
            >
                <View style={{flex: 1, justifyContent: "center"}}>
                    <Image source={logo}/>
                </View>
                <View style={styles.container}>
                    <View style={{alignItems: "center"}}>
                        <Text style={{fontSize: 30, fontWeight:'bold'}}>Welcome!</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            {/* <Text style={{paddingLeft: 10, marginBottom: 5}}>Username</Text> */}
                            <TextInput 
                                style={styles.input}
                                placeholder='Create a username'
                                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
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
            </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems:"center",
        backgroundColor: "#524F81",
    },
    container: {
        flex: 1,
        flexDirection: "column",
        width: "65%"
    },
    loginButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFC107",
        borderRadius: 25,
        height: 45
    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    inputContainer: {
        // borderWidth: 1,
        width: "100%",
        height: 225,
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    input: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        height: 45,
        paddingLeft: 15
    },
    inputText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    presetContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 2
    }
})

export default WelcomeScreen;