import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const ShulgaTashCave1 = () => {
  return (
    <ImageBackground
      style={styles.shulgaTashCave}
      resizeMode="cover"
      source={require("../assets/shulgatashcave1.png")}
    />
  );
};

const styles = StyleSheet.create({
  shulgaTashCave: {
    borderRadius: Border.br_smi,
    width: 363,
    height: 132,
  },
});

export default ShulgaTashCave1;
