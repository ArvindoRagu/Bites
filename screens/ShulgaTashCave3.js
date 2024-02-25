import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ShulgaTashCave3 = () => {
  return (
    <View style={styles.shulgaTashCave}>
      <Text style={styles.savesFromYesterday}>Saves from yesterday</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  savesFromYesterday: {
    position: "absolute",
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorGray,
    textAlign: "left",
    width: "100%",
  },
  shulgaTashCave: {
    flex: 1,
    height: 65,
    width: "100%",
  },
});

export default ShulgaTashCave3;
