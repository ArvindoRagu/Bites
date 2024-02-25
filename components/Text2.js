import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text2 = () => {
  return <Text style={styles.text}>{`1,239 `}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorGray,
    textAlign: "left",
  },
});

export default Text2;
