import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TripItem({TripName}) {
  return (
    <View>
        <TouchableOpacity>
            <Text>{TripName}</Text>
        </TouchableOpacity>
    </View>
  )
}