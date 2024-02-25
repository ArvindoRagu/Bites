import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupInstance2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <Pressable
        style={styles.instanceChild}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text
        style={[styles.attCustomersHit, styles.hAgoTypo]}
      >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
      <Text style={[styles.hAgo, styles.hAgoTypo]}>12h ago</Text>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hAgoTypo: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    width: "97.63%",
    top: "0%",
    right: "2.37%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    position: "absolute",
  },
  attCustomersHit: {
    height: "64.08%",
    width: "64.39%",
    top: "7.77%",
    left: "35.61%",
  },
  hAgo: {
    top: "70.87%",
    left: "64.09%",
  },
  image2Icon: {
    height: "86.41%",
    width: "29.38%",
    top: "6.8%",
    right: "67.95%",
    bottom: "6.8%",
    left: "2.67%",
    borderRadius: Border.br_9xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    width: 337,
    height: 103,
  },
});

export default GroupInstance2;
