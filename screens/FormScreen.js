import React from "react"
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native"
import { globalStyles } from "../styles/globalStyles"

export default function FormScreen() {
  return (
    <ImageBackground
      source={require("../assets/weedRN.jpg")}
      style={globalStyles.container}
    >
      <Text style={styles.formScreenText}>Add to the Database</Text>
    </ImageBackground>
  ) 
}

const styles = StyleSheet.create({
  formScreenText: {
    color: "white",
    fontFamily: "BigSmoke",
    fontSize: 50,
    paddingTop: 30,
    textAlign: "center",
  },
})
