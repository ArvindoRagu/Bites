import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Group = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo]}>2,432</Text>
      <Image
        style={[styles.viewLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/view-light.png")}
      />
      <Image
        style={[styles.alarmclockLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/alarmclock-light.png")}
      />
      <Pressable
        style={styles.groupChild}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text
        style={[styles.surgingNvidiaStock, styles.textTypo]}
      >{`Surging Nvidia Stock Keeps Drawing In More Believers
`}</Text>
      <Text style={[styles.hAgo, styles.textTypo]}>29h ago</Text>
      <Image
        style={styles.image7Icon}
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
    position: "absolute",
  },
  lightIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.29%",
    height: "23.3%",
    position: "absolute",
  },
  text: {
    top: "71.84%",
    left: "43.16%",
  },
  viewLightIcon: {
    top: "68.93%",
    right: "58.05%",
    bottom: "7.77%",
    left: "34.65%",
  },
  alarmclockLightIcon: {
    top: "66.99%",
    right: "35.56%",
    bottom: "9.71%",
    left: "57.14%",
  },
  groupChild: {
    height: "100%",
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
    width: "100%",
  },
  surgingNvidiaStock: {
    width: "54.41%",
    top: "6.8%",
    left: "36.47%",
  },
  hAgo: {
    top: "70.87%",
    left: "65.65%",
  },
  image7Icon: {
    top: 7,
    left: 9,
    width: 97,
    height: 88,
    position: "absolute",
  },
  parent: {
    flex: 1,
    height: 103,
    width: "100%",
  },
});

export default Group;
