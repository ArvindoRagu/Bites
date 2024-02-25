import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import MeetRDDTPopular1 from "./MeetRDDTPopular1";
import SourceGradeUnbiased1 from "./SourceGradeUnbiased1";
import ShulgaTashCave1 from "./ShulgaTashCave1";
import Ellipse from "./Ellipse";
import AuthorAuthorText from "./AuthorAuthorText";

const GroupComponent2 = () => {
  return (
    <View style={styles.bookmarkLightParent}>
      <Image
        style={styles.bookmarkLightIcon}
        contentFit="cover"
        source={require("../assets/bookmark-light1.png")}
      />
      <MeetRDDTPopular1 />
      <SourceGradeUnbiased1 />
      <ShulgaTashCave1 />
      <Ellipse />
      <AuthorAuthorText />
    </View>
  );
};

const styles = StyleSheet.create({
  bookmarkLightIcon: {
    position: "absolute",
    height: "12.63%",
    width: "10.99%",
    top: "85.32%",
    right: "1.37%",
    bottom: "2.05%",
    left: "87.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bookmarkLightParent: {
    width: 364,
    height: 293,
  },
});

export default GroupComponent2;
