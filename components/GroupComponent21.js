import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo]}>2,432</Text>
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
      <Pressable
        style={styles.componentChild}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text
        style={[styles.surgingNvidiaStock, styles.image7IconPosition]}
      >{`Surging Nvidia Stock Keeps Drawing In More Believers
`}</Text>
      <Text style={[styles.hAgo, styles.textTypo]}>29h ago</Text>
      <Image
        style={[styles.image7Icon, styles.image7IconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
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
  image7IconPosition: {
    top: "6.8%",
    position: "absolute",
  },
  text: {
    top: "71.84%",
    left: "43.16%",
    position: "absolute",
  },
  viewLightIcon: {
    top: "68.93%",
    right: "58.05%",
    left: "34.65%",
    bottom: "7.77%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.29%",
    height: "23.3%",
    position: "absolute",
  },
  alarmclockLightIcon: {
    top: "66.99%",
    right: "35.56%",
    bottom: "9.71%",
    left: "57.14%",
    width: "7.29%",
    height: "23.3%",
    position: "absolute",
  },
  componentChild: {
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
  surgingNvidiaStock: {
    width: "54.41%",
    left: "36.47%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  hAgo: {
    top: "70.87%",
    left: "65.65%",
    position: "absolute",
  },
  image7Icon: {
    height: "85.44%",
    width: "29.48%",
    right: "67.78%",
    left: "2.74%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "7.77%",
  },
  parent: {
    width: 329,
    height: 103,
  },
});

export default GroupComponent2;
