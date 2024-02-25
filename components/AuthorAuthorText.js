import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AuthorAuthorText = () => {
  return <Text style={styles.authorAuthor}>Author Author</Text>;
};

const styles = StyleSheet.create({
  authorAuthor: {
    fontSize: FontSize.size_smi,
    letterSpacing: -0.3,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default AuthorAuthorText;
