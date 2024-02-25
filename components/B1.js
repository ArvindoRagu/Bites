import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const B1 = () => {
  return (
    <ImageBackground
      style={styles.b11}
      resizeMode="cover"
      source={require("../assets/b11.png")}
    />
  );
};

const styles = StyleSheet.create({
  b11: {
    width: 356,
    height: 232,
  },
});

export default B1;
