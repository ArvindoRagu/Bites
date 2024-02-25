import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const InterestManager = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.interestManager}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.myInterests}>My Interests</Text>
      <Pressable
        style={styles.interestManagerChild}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.groupParent}>
        <View style={styles.groupLayout}>
          <Pressable
            style={[styles.groupChild, styles.groupLayout]}
            onPress={() =>
              navigation.navigate("ViewFullPageButtonFromMa111111")
            }
          />
          <Text style={styles.entertainment}>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.entertainment1}>Entertainment</Text>
          </Text>
          <Image
            style={[styles.expandRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/expand-right.png")}
          />
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa111111")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.finance, styles.artlitPosition]}>Finance</Text>
          <Image
            style={[styles.expandRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/expand-right.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa111111")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={styles.scitech}>Sci/Tech</Text>
          <Image
            style={[styles.expandRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/expand-right.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa111111")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.artlit, styles.artlitPosition]}>Art/Lit</Text>
          <Image
            style={[styles.expandRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/expand-right.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa111111")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Image
            style={[styles.expandRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/expand-right.png")}
          />
          <Text style={[styles.politics, styles.politicsTypo]}>Politics</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa111111")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Image
            style={[styles.expandRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/expand-right.png")}
          />
          <Text style={[styles.lifestyle, styles.politicsTypo]}>Lifestyle</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 52,
    width: 324,
  },
  artlitPosition: {
    height: 37,
    left: 16,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.text,
    lineHeight: 20,
    top: 15,
    textAlign: "left",
    position: "absolute",
  },
  politicsTypo: {
    textAlign: "center",
    top: 17,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.text,
    lineHeight: 20,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "11.82%",
    right: "84.8%",
    bottom: "86.45%",
    left: "13.07%",
  },
  myInterests: {
    top: 156,
    left: 28,
    fontSize: FontSize.size_16xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.colorBlack,
    width: 319,
    textAlign: "left",
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
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorGray_400,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xl,
  },
  entertainment1: {
    fontSize: FontSize.title_size,
  },
  entertainment: {
    width: 244,
    height: 35,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.text,
    lineHeight: 20,
    top: 15,
    left: 11,
    textAlign: "left",
    position: "absolute",
  },
  expandRightIcon: {
    height: "46.15%",
    width: "7.41%",
    top: "26.92%",
    right: "6.48%",
    bottom: "26.92%",
    left: "86.11%",
  },
  finance: {
    width: 236,
  },
  rectangleGroup: {
    marginTop: 15,
  },
  scitech: {
    width: 181,
    left: 16,
    fontSize: FontSize.size_xl,
    height: 35,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.text,
    lineHeight: 20,
    top: 15,
    textAlign: "left",
    position: "absolute",
  },
  artlit: {
    width: 171,
  },
  politics: {
    left: 19,
    width: 69,
    height: 26,
  },
  lifestyle: {
    width: 96,
    height: 25,
    left: 11,
    textAlign: "center",
    top: 17,
  },
  groupParent: {
    top: 223,
    left: 26,
    position: "absolute",
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
