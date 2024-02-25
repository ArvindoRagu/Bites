import * as React from "react";
import { StyleSheet, View } from "react-native";

const LeftSide = () => {
  return (
    <View style={styles.leftSide}>
      <View style={styles.time} />
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 32,
    width: 54,
    height: 21,
  },
  leftSide: {
    flex: 1,
    width: "100%",
    height: 21,
  },
});

export default LeftSide;
