import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InterestManager = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.interestManager}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.myInterests}>My Interests</Text>
      <Pressable
        style={styles.interestManagerChild}
        onPress={() => navigation.goBack()}
      />
      <View style={[styles.interestManagerItem, styles.interestChildLayout]} />
      <Text style={[styles.entertainment, styles.artlitLayout]}>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.entertainment1}>Entertainment</Text>
      </Text>
      <Image
        style={[styles.expandRightIcon, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <View style={[styles.interestManagerInner, styles.interestChildLayout]} />
      <Text style={[styles.finance, styles.artlitLayout]}>Finance</Text>
      <Image
        style={[styles.expandRightIcon1, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <View style={[styles.rectangleView, styles.interestChildLayout]} />
      <Text style={[styles.scitech, styles.artlitLayout]}>Sci/Tech</Text>
      <Image
        style={[styles.expandRightIcon2, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <View
        style={[styles.interestManagerChild1, styles.interestChildLayout]}
      />
      <Text style={[styles.artlit, styles.artlitLayout]}>Art/Lit</Text>
      <Text style={[styles.artlit, styles.artlitLayout]}>Art/Lit</Text>
      <Text style={[styles.artlit, styles.artlitLayout]}>Art/Lit</Text>
      <Text style={[styles.artlit, styles.artlitLayout]}>Art/Lit</Text>
      <View
        style={[styles.interestManagerChild2, styles.interestChildLayout]}
      />
      <View
        style={[styles.interestManagerChild3, styles.interestChildLayout]}
      />
      <Image
        style={[styles.expandRightIcon3, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon4, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon5, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Text style={[styles.politics, styles.politicsTypo]}>Politics</Text>
      <Text style={[styles.lifestyle, styles.politicsTypo]}>Lifestyle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  interestChildLayout: {
    height: 52,
    width: 324,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_2xs,
    left: 27,
    position: "absolute",
  },
  artlitLayout: {
    height: 78,
    width: 236,
    textAlign: "center",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.text,
    lineHeight: 20,
    position: "absolute",
  },
  expandIconLayout: {
    left: "81.6%",
    right: "12%",
    width: "6.4%",
    height: "2.96%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  politicsTypo: {
    textAlign: "center",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.text,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "11.82%",
    right: "84.8%",
    bottom: "86.45%",
    left: "13.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myInterests: {
    top: 156,
    left: 28,
    fontSize: FontSize.size_16xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 319,
    position: "absolute",
  },
  interestManagerChild: {
    height: "3.94%",
    width: "8.8%",
    top: "10.71%",
    right: "81.07%",
    bottom: "85.34%",
    left: "10.13%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  interestManagerItem: {
    top: 207,
  },
  text: {
    fontSize: FontSize.size_xl,
  },
  entertainment1: {
    fontSize: FontSize.title_size,
  },
  entertainment: {
    top: 224,
    left: -11,
  },
  expandRightIcon: {
    top: "27.22%",
    bottom: "69.83%",
  },
  interestManagerInner: {
    top: 266,
  },
  finance: {
    top: 281,
    left: -31,
    fontSize: FontSize.size_xl,
  },
  expandRightIcon1: {
    top: "34.48%",
    bottom: "62.56%",
  },
  rectangleView: {
    top: 325,
  },
  scitech: {
    top: 342,
    left: -27,
    fontSize: FontSize.size_xl,
  },
  expandRightIcon2: {
    top: "41.75%",
    bottom: "55.3%",
  },
  interestManagerChild1: {
    top: 384,
  },
  artlit: {
    top: 399,
    left: -37,
    fontSize: FontSize.size_xl,
  },
  interestManagerChild2: {
    top: 443,
  },
  interestManagerChild3: {
    top: 502,
  },
  expandRightIcon3: {
    top: "49.01%",
    bottom: "48.03%",
  },
  expandRightIcon4: {
    top: "56.28%",
    bottom: "40.76%",
  },
  expandRightIcon5: {
    top: "63.55%",
    bottom: "33.5%",
  },
  politics: {
    top: 460,
    left: 46,
    width: 69,
    height: 26,
    fontSize: FontSize.size_xl,
  },
  lifestyle: {
    top: 519,
    left: 38,
    width: 96,
    height: 25,
    fontSize: FontSize.size_xl,
  },
  interestManager: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default InterestManager;
