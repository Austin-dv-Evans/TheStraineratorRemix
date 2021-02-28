import React from 'react'
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/globalStyles'

export default function Home() {
  return (
    <ImageBackground source={require('../assets/weedRN.jpg')} style={globalStyles.container}>
      <View>
        <Text style={styles.homeScreenText}>The Strainerator</Text>
        <Text style={styles.secondaryText}>Make Random Weed Strain Names Here!</Text>
        <TouchableOpacity style={styles.btnWrapper}><Text style={styles.generateBtn}>Generate</Text></TouchableOpacity>
      </View>
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
  secondaryText: {
    color: 'white',
    marginTop: 25,
    fontSize: 25,
    fontFamily: "RaggaeFont",
    textAlign: "center"
  },
  btnWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  generateBtn: {
    color: "yellow",
    padding: 15,
    fontFamily: "BigSmoke",
    fontSize: 40,
    backgroundColor: 'green',
    marginTop: '100%',
    textAlign: 'center',
    borderRadius: 10,
    
  }
})