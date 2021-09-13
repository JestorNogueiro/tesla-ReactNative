import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from "../cars";
import CarItems from "../CarItems";
const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItems car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={"false"}
      />
      {/* <CarItems
        modelName="Model 3"
        modelImage={require("../../assets/images/Model3.jpeg")}
        tagline="order online for"
        tagSub="TouchLess Delivery "
      /> */}
    </View>
  );
};

export default CarList;
