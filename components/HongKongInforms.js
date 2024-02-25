import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HongKongInforms = () => {
  return (
    <Text style={styles.hongKongInforms}>
      Hong Kong informs on 2023 food incident monitoring
    </Text>
  );
};

const styles = StyleSheet.create({
  hongKongInforms: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorGray,
    textAlign: "left",
    width: 193,
  },
});

export default HongKongInforms;
