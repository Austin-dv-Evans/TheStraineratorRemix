import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

export default function Header(){

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>The Strainerator</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
    marginHorizontal: 10,
  },
})