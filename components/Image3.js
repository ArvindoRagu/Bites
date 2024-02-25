import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const Image3 = () => {
  return (
    <ImageBackground
      style={styles.image3Icon}
      resizeMode="cover"
      source={require("../assets/image2.png")}
    />
  );
};

const styles = StyleSheet.create({
  image3Icon: {
    borderRadius: Border.br_9xs,
    width: 99,
    height: 89,
  },
});

export default Image3;
