import React from "react"
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native"
import { globalStyles } from '../styles/globalStyles'

export default function DatabaseScreen() {
  return (
    <ImageBackground
      source={require("../assets/weedRN.jpg")}
      style={globalStyles.container}
    >
      <Text style={styles.databaseScreenText}>View the Database</Text>
    </ImageBackground>
  ) 
}

const styles = StyleSheet.create({
  databaseScreenText: {
    color: "white",
    fontFamily: "BigSmoke",
    fontSize: 50,
    paddingTop: 30,
    textAlign: "center",
  },
})
