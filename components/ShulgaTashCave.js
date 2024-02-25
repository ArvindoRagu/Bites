import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const ShulgaTashCave = () => {
  return (
    <ImageBackground
      style={styles.shulgaTashCave}
      resizeMode="cover"
      source={require("../assets/shulgatashcave.png")}
    />
  );
};

const styles = StyleSheet.create({
  shulgaTashCave: {
    borderRadius: Border.br_smi,
    width: 183,
    height: 180,
  },
});

export default ShulgaTashCave;
