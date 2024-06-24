import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View, TouchableOpacity, Text} from 'react-native';

// Screen size
const {width, height} = Dimensions.get("screen")


function WelcomeScreen({navigation}) {
    const background = require("../assets/app_images/welcome_screen.png")

    return (
        <ImageBackground
            source={background}
            style={styles.background}
            resizeMode='stretch'
        >
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Trips")}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        // alignItems:"center"
    },
    container: {
        // justifyContent: "center",
        alignItems: "center"
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
    }

})

export default WelcomeScreen;