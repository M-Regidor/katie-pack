import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TripItem from './TripItem'


export default function TripsIndex() {
    // Placeholder trips
    const trips = ["Japan", "Finland","Australia","Thailand","Morocco"]

    return (
        <View style={styles.container}>
            {trips.map((location) => 
                <TripItem tripName={location}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        gap: 10
    }
})