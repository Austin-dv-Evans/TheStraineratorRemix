import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Home from "../screens/Home"
import FormScreen from "../screens/FormScreen"
import DatabaseScreen from "../screens/DatabaseScreen"
import { NavigationContainer } from "@react-navigation/native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createMaterialBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="red"
        inactiveColor="yellow"
        barStyle={{ backgroundColor: "green", paddingBottom: 20}}
        initialRouteName="Home"
        backBehavior="history"
        shifting={true}
      >
        <Tab.Screen
          name="FormScreen"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="form-textbox"
                color={color}
                size={30}
              />
            ),
          }}
          component={FormScreen}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="database-search"
                color={color}
                size={30}
              />
            ),
          }}
          name="DatabaseScreen"
          component={DatabaseScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNav
