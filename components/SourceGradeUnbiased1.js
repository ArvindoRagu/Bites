import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SourceGradeUnbiased1 = () => {
  return (
    <Text style={styles.sourceGradeUnbiased}>{`Source Grade: Unbiased 
Complexity: Low
Released: This Morning
Time to read: 5 mins 
`}</Text>
  );
};

const styles = StyleSheet.create({
  sourceGradeUnbiased: {
    fontSize: FontSize.size_smi,
    letterSpacing: -0.3,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
    color: Color.colorBlack,
    textAlign: "left",
    width: 168,
    height: 72,
  },
});

export default SourceGradeUnbiased1;
