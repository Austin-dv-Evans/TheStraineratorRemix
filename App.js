import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './shared/Header'
import BottomTabNav from './routes/BottomTabNav'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

const getFonts = () =>
  Font.loadAsync({
    RaggaeFont: require("./assets/fonts/ReggaeOne.ttf"),
    BigSmoke: require("./assets/fonts/BigSmoke.ttf"),
  })

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

    if(fontsLoaded){
      return <BottomTabNav />
    }
    else {
      return (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={"Whoops, hope you aren't reading this...."}
        />
      )
    }
}


