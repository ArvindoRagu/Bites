import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const Image5 = () => {
  return (
    <ImageBackground
      style={styles.image5Icon}
      resizeMode="cover"
      source={require("../assets/image2.png")}
    />
  );
};

const styles = StyleSheet.create({
  image5Icon: {
    borderRadius: Border.br_9xs,
    width: 99,
    height: 89,
  },
});

export default Image5;
