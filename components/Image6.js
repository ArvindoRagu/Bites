import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const Image6 = () => {
  return (
    <ImageBackground
      style={styles.image15Icon}
      resizeMode="cover"
      source={require("../assets/image15.png")}
    />
  );
};

const styles = StyleSheet.create({
  image15Icon: {
    borderRadius: Border.br_lg,
    width: 359,
    height: 107,
  },
});

export default Image6;
