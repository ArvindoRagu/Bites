import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ATTCustomersHit1 = () => {
  return (
    <Text
      style={styles.attCustomersHit}
    >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
  );
};

const styles = StyleSheet.create({
  attCustomersHit: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorGray,
    textAlign: "left",
    width: 217,
    height: 66,
  },
});

export default ATTCustomersHit1;
