import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo1]}>942</Text>
      <Image
        style={[styles.ellipse65LightIcon, styles.iconLayout1]}
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
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
      <Text style={[styles.hAgo, styles.textTypo1]}>3h ago</Text>
      <Image
        style={[styles.image8Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text style={[styles.berkshireHathawayRamps, styles.textTypo1]}>
        Berkshire Hathaway ramps up buying in secret stock. Here's what we know.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChildPosition: {
    top: "75.73%",
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
    left: "42.86%",
    top: "74.76%",
  },
  ellipse65LightIcon: {
    height: "7.77%",
    width: "2.43%",
    top: "77.67%",
    right: "60.79%",
    bottom: "14.56%",
    left: "36.78%",
  },
  ellipse66LightIcon: {
    height: "11.65%",
    width: "5.47%",
    right: "59.27%",
    bottom: "12.62%",
    left: "35.26%",
  },
  componentChild: {
    height: "13.59%",
    width: "4.26%",
    right: "37.39%",
    bottom: "10.68%",
    left: "58.36%",
  },
  componentItem: {
    right: "41.64%",
    bottom: "23.3%",
    left: "57.75%",
    top: "74.76%",
  },
  componentInner: {
    top: "73.79%",
    right: "36.78%",
    bottom: "24.27%",
    left: "62.61%",
  },
  vectorIcon: {
    height: "2.43%",
    width: "1.52%",
    top: "78.16%",
    right: "38.91%",
    bottom: "19.42%",
    left: "59.57%",
  },
  hAgo: {
    left: "65.35%",
    top: "74.76%",
  },
  image8Icon: {
    height: "86.41%",
    width: "29.18%",
    top: "7.77%",
    right: "68.39%",
    bottom: "5.83%",
    left: "2.43%",
  },
  rectanglePressable: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    position: "absolute",
  },
  berkshireHathawayRamps: {
    width: "58.66%",
    top: "11.65%",
    left: "36.17%",
  },
  parent: {
    width: 329,
    height: 103,
  },
});

export default GroupComponent3;
