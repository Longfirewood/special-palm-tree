import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";

import React from "react";
import Header from "./components/Header";
import MainStack from "./routes/MainStack";
import MainPage from './components/MainPage';
export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <Header />
      <MainPage /> */}
      {/* <MainStack /> */}

      <MainPage />

    </View>
  );
}

const styles = StyleSheet.create({});
