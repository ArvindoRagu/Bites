import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const Screenshot20240222At = () => {
  return (
    <ImageBackground
      style={styles.screenshot20240222At429}
      resizeMode="cover"
      source={require("../assets/screenshot20240222at4291.png")}
    />
  );
};

const styles = StyleSheet.create({
  screenshot20240222At429: {
    borderTopRightRadius: Border.br_42xl,
    borderBottomRightRadius: Border.br_42xl,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Screenshot20240222At;
