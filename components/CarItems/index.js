import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles";
const CarItem = (props) => {
  const { modelName, modelDesc, modelImage, tagline, tagSub } = props.car;
  console.log(props.car);
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={modelImage} style={styles.backgroundImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.modelName}>{modelName}</Text>
        <Text style={styles.modelDescription}>
          {tagline} <Text style={styles.tagSub}>{tagSub}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          content="custom order"
          onPress={console.warn("you been warned")}
        />
        <Button
          type="secondary"
          content="existing inventory"
          onPress={console.warn("you been warned")}
        />
      </View>
    </View>
  );
};

export default CarItem;
