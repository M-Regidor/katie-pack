import { View, Text, SafeAreaView, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function UpcomingTrips() {
  const bear = require("../assets/app_images/katie_pack_bear_200.png")
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}>Up Coming trips</Text>
        <Image source={bear}></Image>
      </View>
      <View style={styles.container}>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    flexDirection: "column"
  },
  container:{
    flex: 1,
    alignItems: "center"
  },
  text:{
    paddingTop: 10,
    paddingBottom: 40,
    fontSize: 25,
    fontWeight: "bold"
  }
})