import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.backgroundImage}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.modelName}>Model S</Text>
        <Text style={styles.modelDescription}>Starting at $69,333</Text>
      </View>
    </View>
  );
};

export default CarItem;
