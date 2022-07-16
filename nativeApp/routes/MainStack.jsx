import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "../components/MainPage";
import Connect from "../components/Connect";
import { Button } from "react-native";
import ConnectionsList from "../components/ConnectionsList";
import ListItem from "../components/ListItem";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ConnectScreen"
          component={Connect}
          options={{
            title: "ConnectionScreen",
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ title: "Main" }}
        />
        <Stack.Screen
          name="List"
          component={ConnectionsList}
          options={{ title: "List of devices" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
