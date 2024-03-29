import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const YourInfocastPageFromMain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourInfocastPageFromMain}>
      <Pressable
        style={[styles.backToHomeParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={[styles.backToHome, styles.backToHomeFlexBox]}>
          Back To Home
        </Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </Pressable>
      <View style={styles.shulgaTashCave}>
        <Text style={[styles.financeDigest, styles.rateTypo]}>
          Finance Digest
        </Text>
        <Text style={[styles.welcomeToYour, styles.backToHomeFlexBox]}>
          Welcome to your personalized infocast, a track covering the latest
          developments in the stock market, personalized to your liking.
        </Text>
      </View>
      <Text style={[styles.rate, styles.ratePosition]}>Rate:</Text>
      <View style={[styles.groupParent, styles.ratePosition]}>
        <Image
          style={[styles.componentChild, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>0.00</Text>
        <Text style={[styles.text1, styles.textTypo]}>6.12</Text>
      </View>
      <View style={[styles.refresh41Parent, styles.parentFlexBox]}>
        <Pressable style={styles.refreshLayout}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={styles.text2}>10</Text>
        </Pressable>
        <Image
          style={styles.arrowDropRightIcon}
          contentFit="cover"
          source={require("../assets/arrow-drop-right.png")}
        />
        <Pressable style={[styles.refresh42, styles.refreshLayout]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Text style={styles.text2}>10</Text>
        </Pressable>
      </View>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-61.png")}
      />
      <Image
        style={styles.image12Icon}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  backToHomeFlexBox: {
    textAlign: "left",
    lineHeight: 20,
  },
  rateTypo: {
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  ratePosition: {
    left: 39,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 24,
    color: Color.color,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "8.33%",
    top: "50%",
    width: "41.67%",
    height: "41.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  refreshLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  backToHome: {
    color: Color.colorMediumpurple,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  arrowIcon: {
    width: 26,
    height: 16,
    marginLeft: 12,
  },
  backToHomeParent: {
    top: 704,
    left: 88,
    borderRadius: Border.br_81xl,
    backgroundColor: "rgba(255, 103, 139, 0)",
    borderStyle: "solid",
    borderColor: Color.colorMediumpurple,
    borderWidth: 1,
    width: 200,
    height: 47,
    padding: 10,
  },
  financeDigest: {
    height: "43.82%",
    width: "67.14%",
    fontSize: 28,
    letterSpacing: -0.6,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  welcomeToYour: {
    height: "56.29%",
    width: "99.66%",
    top: "43.71%",
    left: "0.34%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.rubikRegular,
    color: "#222",
    opacity: 0.7,
    position: "absolute",
  },
  shulgaTashCave: {
    height: "10.96%",
    width: "78.64%",
    top: "55.17%",
    right: "10.96%",
    bottom: "33.87%",
    left: "10.4%",
    position: "absolute",
  },
  rate: {
    top: 407,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.title,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    left: 39,
  },
  componentChild: {
    height: "31.43%",
    width: "99.33%",
    right: "0.67%",
    bottom: "68.57%",
    left: "0%",
    top: "0%",
  },
  text: {
    height: "80%",
    width: "9.7%",
    top: "27.14%",
    left: "0%",
  },
  text1: {
    height: "68.57%",
    width: "10.37%",
    top: "22.86%",
    left: "89.63%",
  },
  groupParent: {
    top: 588,
    width: 299,
    height: 70,
  },
  vectorIcon: {
    height: "82.08%",
    width: "83.33%",
    top: "8.33%",
    bottom: "9.58%",
    left: "8.33%",
    right: "8.33%",
  },
  vectorIcon1: {
    right: "50%",
    left: "8.33%",
  },
  text2: {
    top: "25%",
    left: "25%",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.color,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    position: "absolute",
  },
  arrowDropRightIcon: {
    width: 42,
    height: 42,
    marginLeft: 38,
  },
  vectorIcon3: {
    left: "50%",
    right: "8.33%",
  },
  refresh42: {
    marginLeft: 38,
  },
  refresh41Parent: {
    top: 643,
    left: 23,
    width: 332,
    height: 55,
    paddingBottom: 20,
  },
  image6Icon: {
    top: 406,
    left: 78,
    width: 128,
    height: 23,
    position: "absolute",
  },
  image12Icon: {
    top: 73,
    left: 30,
    borderRadius: Border.br_6xl,
    width: 317,
    height: 294,
    position: "absolute",
  },
  yourInfocastPageFromMain: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default YourInfocastPageFromMain;
