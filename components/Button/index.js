import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";
const Button = ({ type, content }) => {
  const types = type;
  const backgroundColor = types === "primary" ? "#FFFFFFA6" : "#171A20CC";
  const textColor = types === "primary" ? "#171A20CC" : "#FFFFFF";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={console.warn("hey there")}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
