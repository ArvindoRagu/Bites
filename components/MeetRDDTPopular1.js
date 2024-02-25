import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MeetRDDTPopular1 = () => {
  return (
    <Text
      style={styles.meetRddtPopular}
    >{`Meet RDDT: Popular social platform Reddit to sell stock in an unusual IPO
`}</Text>
  );
};

const styles = StyleSheet.create({
  meetRddtPopular: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorBlack,
    textAlign: "left",
    width: 359,
    height: 67,
  },
});

export default MeetRDDTPopular1;
