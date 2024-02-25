import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Image2 from "./Image2";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent41 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <Pressable
        style={styles.componentChild}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text
        style={[styles.attCustomersHit, styles.hAgoTypo]}
      >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
      <Text style={[styles.hAgo, styles.hAgoTypo]}>12h ago</Text>
      <Image2 />
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
  componentChild: {
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
    width: "64.39%",
    top: "6.8%",
    left: "35.61%",
  },
  hAgo: {
    top: "70.87%",
    left: "64.09%",
  },
  rectangleParent: {
    width: 337,
    height: 103,
  },
});

export default GroupComponent41;
