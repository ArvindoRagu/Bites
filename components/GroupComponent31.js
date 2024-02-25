import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame111 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo]}>{`1,239 `}</Text>
      <Image
        style={[styles.viewLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/view-light.png")}
      />
      <Image
        style={[styles.alarmclockLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/alarmclock-light.png")}
      />
      <View style={[styles.rectangleParent, styles.instanceChildPosition]}>
        <Pressable
          style={[styles.instanceChild, styles.instanceChildPosition]}
          onPress={() => navigation.navigate("YourInfocastPageFromMain")}
        />
        <Text
          style={[styles.attCustomersHit, styles.image2IconPosition]}
        >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
        <Text style={[styles.hAgo, styles.textTypo]}>12h ago</Text>
        <Image
          style={[styles.image2Icon, styles.image2IconPosition]}
          contentFit="cover"
          source={require("../assets/image2.png")}
        />
      </View>
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
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  instanceChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  image2IconPosition: {
    top: "6.8%",
    position: "absolute",
  },
  text: {
    top: "71.84%",
    left: "43.32%",
    position: "absolute",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  viewLightIcon: {
    top: "68.93%",
    right: "57.86%",
    bottom: "7.77%",
    left: "35.01%",
    width: "7.12%",
    height: "23.3%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  alarmclockLightIcon: {
    top: "66.99%",
    right: "35.91%",
    bottom: "9.71%",
    left: "56.97%",
    width: "7.12%",
    height: "23.3%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  instanceChild: {
    width: "97.63%",
    right: "2.37%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
  },
  attCustomersHit: {
    width: "64.39%",
    left: "35.61%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  hAgo: {
    top: "70.87%",
    left: "64.09%",
    position: "absolute",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  image2Icon: {
    height: "86.41%",
    width: "29.38%",
    right: "67.95%",
    bottom: "6.8%",
    left: "2.67%",
    borderRadius: Border.br_9xs,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  rectangleParent: {
    width: "100%",
    right: "-1.19%",
    left: "1.19%",
  },
  parent: {
    width: 337,
    height: 103,
  },
});

export default Frame111;
