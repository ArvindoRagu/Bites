import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const Image2 = () => {
  return (
    <ImageBackground
      style={styles.image2Icon}
      resizeMode="cover"
      source={require("../assets/image2.png")}
    />
  );
};

const styles = StyleSheet.create({
  image2Icon: {
    borderRadius: Border.br_9xs,
    width: 99,
    height: 89,
  },
});

export default Image2;
