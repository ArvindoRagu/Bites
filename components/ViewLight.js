import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ViewLight = () => {
  return (
    <View style={styles.viewLight}>
      <Image
        style={[styles.ellipse65LightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-65-light.png")}
      />
      <Image
        style={[styles.ellipse66LightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-66-light.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  ellipse65LightIcon: {
    height: "33.33%",
    width: "33.33%",
    top: "33.33%",
    right: "33.33%",
    bottom: "33.33%",
    left: "33.33%",
  },
  ellipse66LightIcon: {
    height: "50%",
    width: "75%",
    top: "25%",
    right: "12.5%",
    bottom: "25%",
    left: "12.5%",
  },
  viewLight: {
    width: 24,
    height: 24,
  },
});

export default ViewLight;
