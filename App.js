import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CarList from "./components/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffee302",
    height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
