import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Line2 = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderTopWidth: 0.2,
    width: 398,
    height: 0,
    transform: [
      {
        rotate: "-0.14deg",
      },
    ],
  },
});

export default Line2;
