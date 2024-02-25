import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import RectangleScreen from "./RectangleScreen";
import HongKongInforms from "./HongKongInforms";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent4 = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo]}>942</Text>
      <Image
        style={[styles.ellipse65LightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-65-light.png")}
      />
      <Image
        style={[styles.ellipse66LightIcon, styles.componentChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-66-light.png")}
      />
      <Image
        style={[styles.componentChild, styles.componentChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.componentItem, styles.componentLayout]}
        contentFit="cover"
        source={require("../assets/vector-65.png")}
      />
      <Image
        style={[styles.componentInner, styles.componentLayout]}
        contentFit="cover"
        source={require("../assets/vector-66.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
      <Text style={[styles.hAgo, styles.textTypo]}>24h ago</Text>
      <Image
        style={[styles.image9Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <RectangleScreen />
      <HongKongInforms />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
    top: "68.93%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChildPosition: {
    top: "69.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentLayout: {
    width: "0.61%",
    height: "1.94%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    left: "43.16%",
  },
  ellipse65LightIcon: {
    height: "7.77%",
    width: "2.43%",
    top: "71.84%",
    right: "60.49%",
    bottom: "20.39%",
    left: "37.08%",
  },
  ellipse66LightIcon: {
    height: "11.65%",
    width: "5.47%",
    right: "58.97%",
    bottom: "18.45%",
    left: "35.56%",
  },
  componentChild: {
    height: "13.59%",
    width: "4.26%",
    right: "37.08%",
    bottom: "16.5%",
    left: "58.66%",
  },
  componentItem: {
    right: "41.34%",
    bottom: "29.13%",
    left: "58.05%",
    top: "68.93%",
    width: "0.61%",
    height: "1.94%",
  },
  componentInner: {
    top: "67.96%",
    right: "36.47%",
    bottom: "30.1%",
    left: "62.92%",
  },
  vectorIcon: {
    height: "2.43%",
    width: "1.52%",
    top: "72.33%",
    right: "38.6%",
    bottom: "25.24%",
    left: "59.88%",
  },
  hAgo: {
    left: "65.65%",
  },
  image9Icon: {
    height: "89.32%",
    width: "27.96%",
    top: "4.85%",
    right: "68.69%",
    bottom: "5.83%",
    left: "3.34%",
  },
  parent: {
    width: 329,
    height: 103,
  },
});

export default GroupComponent4;
