import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import MeetRDDTPopular from "./MeetRDDTPopular";
import SourceGradeUnbiased from "./SourceGradeUnbiased";
import ShulgaTashCave from "./ShulgaTashCave";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.bookmarkLightParent}>
      <Pressable style={styles.bookmarkLight} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bookmark-light.png")}
        />
      </Pressable>
      <Image
        style={[styles.componentChild, styles.authorPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-68.png")}
      />
      <Text style={[styles.authorAuthor, styles.authorPosition]}>
        Author Author
      </Text>
      <MeetRDDTPopular />
      <SourceGradeUnbiased />
      <ShulgaTashCave />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  authorPosition: {
    top: "2.58%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bookmarkLight: {
    left: "53.89%",
    top: "0%",
    right: "39.68%",
    bottom: "87.63%",
    width: "6.43%",
    height: "12.37%",
    position: "absolute",
  },
  componentChild: {
    height: "7.22%",
    width: "3.75%",
    right: "32.98%",
    bottom: "90.21%",
    left: "63.27%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  authorAuthor: {
    left: "69.44%",
    fontSize: FontSize.size_smi,
    letterSpacing: -0.3,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
    color: Color.colorBlack,
    textAlign: "left",
  },
  bookmarkLightParent: {
    width: 373,
    height: 194,
  },
});

export default GroupComponent1;
