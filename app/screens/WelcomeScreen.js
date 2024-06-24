import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View } from 'react-native';
// Screen size
const {width, height} = Dimensions.get("screen")


function WelcomeScreen(props) {
    const background = require("../assets/app_images/welcome_screen.png")
    return (
        <ImageBackground
            source={background}
            style={styles.background}
            resizeMode='stretch'
        >
            <View style={styles.loginButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#8fbc8f"
    }

})

export default WelcomeScreen;