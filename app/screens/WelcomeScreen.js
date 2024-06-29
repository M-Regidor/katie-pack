import React, { useState } from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, Text, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storage } from '../../store/mmkv';

// Screen size
const {width, height} = Dimensions.get("screen")


function WelcomeScreen({navigation}) {
    const logo = require("../assets/app_images/katie-pack-logo-cropped.png")
    const [name, setName] = useState(storage.getString("user.name"))
    

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
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Packing List")}
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
        borderRadius: 10,
        borderWidth: 1,
        width: "50%",
        height: 35
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