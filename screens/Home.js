import React from 'react'
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

export default function Home() {
  return (
    <ImageBackground source={require('../assets/weedRN.jpg')} style={globalStyles.container}>
      <Text style={styles.homeScreenText}>The Strainerator</Text>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  homeScreenText: {
    color: "white",
    fontFamily: "BigSmoke",
    fontSize: 50,
    paddingTop: 30,
    textAlign: 'center'
  },
})