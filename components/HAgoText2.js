import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HAgoText2 = () => {
  return <Text style={styles.hAgo}>12h ago</Text>;
};

const styles = StyleSheet.create({
  hAgo: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorGray,
    textAlign: "left",
  },
});

export default HAgoText2;
