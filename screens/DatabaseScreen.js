import React from "react"
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { globalStyles } from '../styles/globalStyles'

export default function DatabaseScreen() {
  return (
    <ImageBackground
      source={require("../assets/weedRN.jpg")}
      style={globalStyles.container}
    >
      <View style={styles.dbContainer}>
        <Text style={styles.databaseScreenText}>View the Database</Text>
        <TouchableOpacity title="Starters" style={styles.dbButton}><Text style={[styles.dbButtonText, {color: 'red'}]}>Starter</Text></TouchableOpacity>
        <TouchableOpacity title="Flavors" style={styles.dbButton}><Text style={[styles.dbButtonText, {color: 'yellow'}]}>Flavor</Text></TouchableOpacity>
        <TouchableOpacity title="Finales" style={styles.dbButton}><Text style={[styles.dbButtonText, {color: 'white'}]}>Finale</Text></TouchableOpacity>
      </View>
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
  dbContainer: {
    display: "flex",
    alignItems: 'center',
  },  
  dbButton: {
    borderRadius: 20,
    fontSize: 30,
    margin: 5,
    padding: 20,
    backgroundColor: 'green',
    marginTop: 55
  },
  dbButtonText: {
    fontSize: 25,
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: "RaggaeFont"
  }
})
