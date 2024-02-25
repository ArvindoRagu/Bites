import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const AlarmclockLight = () => {
  return (
    <View style={styles.alarmclockLight}>
      <Image
        style={[styles.alarmclockLightChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.alarmclockLightItem, styles.alarmclockLayout]}
        contentFit="cover"
        source={require("../assets/vector-65.png")}
      />
      <Image
        style={[styles.alarmclockLightInner, styles.alarmclockLayout]}
        contentFit="cover"
        source={require("../assets/vector-66.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  alarmclockLayout: {
    bottom: "70.83%",
    top: "20.83%",
    width: "8.33%",
    height: "8.33%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  alarmclockLightChild: {
    height: "58.33%",
    width: "58.33%",
    top: "25%",
    right: "20.83%",
    bottom: "16.67%",
    left: "20.83%",
  },
  alarmclockLightItem: {
    right: "79.17%",
    left: "12.5%",
  },
  alarmclockLightInner: {
    right: "12.5%",
    left: "79.17%",
  },
  vectorIcon: {
    height: "10.42%",
    width: "20.83%",
    top: "43.75%",
    right: "41.67%",
    bottom: "45.83%",
    left: "37.5%",
  },
  alarmclockLight: {
    width: 24,
    height: 24,
  },
});

export default AlarmclockLight;
