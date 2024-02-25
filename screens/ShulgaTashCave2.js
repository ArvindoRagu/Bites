import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const ShulgaTashCave2 = () => {
  return (
    <View style={styles.shulgaTashCave}>
      <Text style={styles.bookmarks}>Bookmarks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bookmarks: {
    position: "absolute",
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: 40,
    letterSpacing: -0.8,
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

export default ShulgaTashCave2;
