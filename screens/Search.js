import * as React from "react";
import { Pressable, StyleSheet, View, TextInput, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.search, styles.searchLayout1]}>
      <Pressable
        style={[styles.searchChild, styles.searchLayout]}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <View style={[styles.searchItem, styles.searchLayout]} />
      <View style={[styles.searchInner, styles.searchInnerLayout]} />
      <View style={[styles.rectangleView, styles.searchInnerLayout]} />
      <TextInput style={styles.searchBar} />
      <Text style={styles.askAnything}>Ask anything...</Text>
      <Text style={[styles.bites, styles.bitesTypo]}>Bites</Text>
      <Text style={[styles.discover, styles.bitesTypo]}>Discover</Text>
      <Text style={styles.ex}>Ex:</Text>
      <View style={[styles.searchBar1, styles.searchPosition1]}>
        <View style={[styles.searchBarChild, styles.searchBorder]} />
      </View>
      <View style={[styles.searchBar2, styles.searchPosition1]}>
        <View style={[styles.searchBarItem, styles.searchBorder]} />
      </View>
      <View style={[styles.searchBar3, styles.searchPosition]}>
        <View style={[styles.searchBarChild, styles.searchBorder]} />
      </View>
      <View style={[styles.searchBar4, styles.searchPosition]}>
        <View style={[styles.searchBarItem, styles.searchBorder]} />
        <Text style={[styles.bestNewLaptop, styles.bestTypo1]}>
          Best New Laptop 2024
        </Text>
      </View>
      <Text style={[styles.bestNewLaptop1, styles.bestTypo1]}>
        Best New Laptop 2024
      </Text>
      <Text style={[styles.bestNewLaptop2, styles.bestTypo]}>
        Best New Laptop 2024
      </Text>
      <Text style={[styles.bestNewLaptop3, styles.bestTypo]}>
        Best New Laptop 2024
      </Text>
      <View style={[styles.home, styles.homeLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <Text
        style={[styles.attCustomersHit, styles.textTypo]}
      >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
      <Text style={[styles.text, styles.textTypo]}>{`1,239 `}</Text>
      <Text style={[styles.hAgo, styles.textTypo]}>12h ago</Text>
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
      <View style={[styles.statusbar, styles.homeLayout]}>
        <View style={[styles.iphoneXOrNewer, styles.searchLayout1]}>
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
            style={styles.leftSideIcon}
            contentFit="cover"
            source={require("../assets/left-side1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  searchLayout: {
    height: 103,
    width: 329,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  searchInnerLayout: {
    width: 328,
    height: 103,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  bitesTypo: {
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.7,
    fontSize: FontSize.size_15xl,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  searchPosition1: {
    top: 255,
    height: 19,
    position: "absolute",
  },
  searchBorder: {
    borderWidth: 0.2,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    top: 0,
    left: 0,
    height: 19,
    borderStyle: "solid",
    position: "absolute",
  },
  searchPosition: {
    top: 230,
    position: "absolute",
  },
  bestTypo1: {
    height: 20,
    width: 113,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  bestTypo: {
    top: 258,
    height: 20,
    width: 113,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  homeLayout: {
    width: 375,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  lightIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  searchChild: {
    top: 348,
    left: 29,
  },
  searchItem: {
    top: 453,
    left: 28,
  },
  searchInner: {
    top: 560,
    left: 29,
  },
  rectangleView: {
    top: 666,
    left: 30,
  },
  searchBar: {
    top: 168,
    left: 24,
    width: 327,
    height: 52,
    position: "absolute",
  },
  askAnything: {
    top: 184,
    fontSize: FontSize.text_size,
    lineHeight: 20,
    width: 286,
    opacity: 0.4,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.text,
    left: 39,
    position: "absolute",
  },
  bites: {
    top: 116,
    left: 146,
  },
  discover: {
    top: 301,
    left: 83,
  },
  ex: {
    top: 229,
    fontSize: FontSize.size_base,
    color: Color.colorDarkgray,
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.text,
    left: 39,
    position: "absolute",
  },
  searchBarChild: {
    width: 125,
  },
  searchBar1: {
    left: 34,
    height: 19,
    width: 125,
  },
  searchBarItem: {
    width: 135,
  },
  searchBar2: {
    left: 165,
    width: 135,
    height: 19,
  },
  searchBar3: {
    left: 72,
    height: 19,
    width: 125,
  },
  bestNewLaptop: {
    top: 3,
    left: 8,
  },
  searchBar4: {
    left: 205,
    height: 23,
    width: 135,
  },
  bestNewLaptop1: {
    top: 233,
    left: 78,
  },
  bestNewLaptop2: {
    left: 41,
  },
  bestNewLaptop3: {
    left: 173,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray,
    width: 134,
    height: 5,
    position: "absolute",
  },
  home: {
    top: 772,
    height: 27,
    left: 0,
    width: 375,
  },
  attCustomersHit: {
    top: 356,
    left: 149,
    width: 217,
    height: 66,
  },
  text: {
    top: 422,
    left: 175,
  },
  hAgo: {
    top: 421,
    left: 245,
  },
  viewLightIcon: {
    top: 419,
    left: 147,
  },
  alarmclockLightIcon: {
    top: 417,
    left: 221,
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    maxWidth: "100%",
    maxHeight: "100%",
    left: 78,
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
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  statusbar: {
    top: 18,
    left: -9,
    height: 44,
  },
  search: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Search;
