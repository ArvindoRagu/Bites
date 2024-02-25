import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle1 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 320,
    height: 90,
  },
});

export default Rectangle1;
