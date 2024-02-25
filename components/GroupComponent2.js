import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ViewFullPageButtonFromMa = () => {
  return (
    <View style={styles.bookmarkLightParent}>
      <Image
        style={styles.bookmarkLightIcon}
        contentFit="cover"
        source={require("../assets/bookmark-light1.png")}
      />
      <Text
        style={styles.meetRddtPopular}
      >{`Meet RDDT: Popular social platform Reddit to sell stock in an unusual IPO
`}</Text>
      <Text
        style={[styles.sourceGradeUnbiased, styles.authorTypo]}
      >{`Source Grade: Unbiased 
Complexity: Low
Released: This Morning
Time to read: 5 mins 
`}</Text>
      <Image
        style={[styles.shulgaTashCave, styles.shulgaTashCaveLayout]}
        contentFit="cover"
        source={require("../assets/shulgatashcave1.png")}
      />
      <Image
        style={[styles.componentChild, styles.authorPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-68.png")}
      />
      <Text style={[styles.authorAuthor, styles.authorPosition]}>
        Author Author
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  authorTypo: {
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: -0.3,
  },
  shulgaTashCaveLayout: {
    left: "0.27%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  authorPosition: {
    top: "0%",
    position: "absolute",
  },
  bookmarkLightIcon: {
    height: "12.63%",
    width: "10.99%",
    top: "85.32%",
    right: "1.37%",
    bottom: "2.05%",
    left: "87.64%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  meetRddtPopular: {
    height: "22.87%",
    width: "98.63%",
    top: "57.34%",
    left: "1.37%",
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: -0.3,
    position: "absolute",
  },
  sourceGradeUnbiased: {
    height: "24.57%",
    width: "46.15%",
    top: "75.43%",
    left: "0%",
    position: "absolute",
  },
  shulgaTashCave: {
    height: "45.05%",
    width: "99.73%",
    top: "7.85%",
    right: "0%",
    bottom: "47.1%",
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  componentChild: {
    height: "4.78%",
    width: "3.85%",
    right: "95.88%",
    bottom: "95.22%",
    left: "0.27%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  authorAuthor: {
    left: "5.77%",
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: -0.3,
  },
  bookmarkLightParent: {
    width: 364,
    height: 293,
  },
});

export default ViewFullPageButtonFromMa;
