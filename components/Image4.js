import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const Image4 = () => {
  return (
    <ImageBackground
      style={styles.image4Icon}
      resizeMode="cover"
      source={require("../assets/image2.png")}
    />
  );
};

const styles = StyleSheet.create({
  image4Icon: {
    borderRadius: Border.br_9xs,
    width: 99,
    height: 89,
  },
});

export default Image4;
