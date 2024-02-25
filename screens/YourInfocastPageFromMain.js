import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const YourInfocastPageFromMain = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.yourInfocastPageFromMain, styles.iphoneXOrNewerLayout]}
    >
      <Image
        style={[styles.shulgaTashCave, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/shulgatash-cave1.png")}
      />
      <View style={styles.home}>
        <View style={styles.homeIndicator} />
      </View>
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
      <View style={[styles.shulgaTashCave1, styles.shulgaPosition]}>
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
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>3.56</Text>
        <Text style={[styles.text1, styles.textTypo]}>6.12</Text>
      </View>
      <View style={[styles.refresh41Parent, styles.parentFlexBox]}>
        <Pressable style={styles.refreshLayout}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
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
            style={[styles.vectorIcon, styles.iconLayout]}
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
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <View style={[styles.iphoneXOrNewer, styles.financeDigestPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Image
              style={[styles.recordingIndicatorIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={[styles.leftSideIcon, styles.statusbarPosition]}
            contentFit="cover"
            source={require("../assets/left-side2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneXOrNewerLayout: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
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
  shulgaPosition: {
    left: "10.4%",
    position: "absolute",
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
  statusbarPosition: {
    top: 12,
    position: "absolute",
  },
  financeDigestPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  shulgaTashCave: {
    height: "39.41%",
    width: "78.93%",
    top: "8.5%",
    right: "10.67%",
    bottom: "52.09%",
    borderRadius: 34,
    left: "10.4%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.colorGray,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  home: {
    top: 774,
    left: 1,
    height: 27,
    width: 375,
    position: "absolute",
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
    backgroundColor: "rgba(255, 103, 139, 0)",
    borderStyle: "solid",
    borderColor: Color.colorMediumpurple,
    borderWidth: 1,
    width: 200,
    height: 47,
    padding: 10,
    borderRadius: Border.br_81xl,
  },
  financeDigest: {
    height: "23.26%",
    width: "67.04%",
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
    fontSize: FontSize.text_size,
    fontFamily: FontFamily.text,
    color: "#222",
    opacity: 0.7,
    position: "absolute",
  },
  shulgaTashCave1: {
    height: "10.96%",
    width: "78.64%",
    top: "55.91%",
    right: "10.96%",
    bottom: "33.13%",
  },
  rate: {
    top: 413,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.title,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    left: 39,
  },
  groupChild: {
    width: 297,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 14,
    width: 29,
    height: 56,
    left: 0,
  },
  text1: {
    top: 16,
    left: 268,
    width: 31,
    height: 48,
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
    position: "absolute",
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
    right: "8.33%",
    left: "50%",
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
    top: 412,
    width: 128,
    height: 23,
    left: 78,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    height: 11,
    width: 24,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    left: 21,
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    overflow: "hidden",
    width: "100%",
  },
  statusbar: {
    left: -1,
    height: 44,
    width: 375,
  },
  yourInfocastPageFromMain: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
  },
});

export default YourInfocastPageFromMain;
