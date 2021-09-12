import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
    // zIndex: 100,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  titleContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  modelName: {
    fontSize: 40,
    fontWeight: 600,
  },
  modelDescription: {
    fontSize: 16,
    color: "#5c5e62",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  tagSub: {
    text: "black",
    textDecorationLine: "underline",
  },
});

export default styles;
