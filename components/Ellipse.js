import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Ellipse = () => {
  return <View style={styles.ellipseView} />;
};

const styles = StyleSheet.create({
  ellipseView: {
    backgroundColor: Color.colorGainsboro_100,
    width: 14,
    height: 14,
  },
});

export default Ellipse;
