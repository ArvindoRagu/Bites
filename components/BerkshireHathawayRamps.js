import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BerkshireHathawayRamps = () => {
  return (
    <Text style={styles.berkshireHathawayRamps}>
      Berkshire Hathaway ramps up buying in secret stock. Here's what we know.
    </Text>
  );
};

const styles = StyleSheet.create({
  berkshireHathawayRamps: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorGray,
    textAlign: "left",
    width: 193,
  },
});

export default BerkshireHathawayRamps;
