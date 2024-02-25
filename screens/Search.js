import * as React from "react";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <TextInput style={styles.searchBar} />
      <Text style={styles.askAnything}>Ask anything...</Text>
      <Text style={[styles.bites, styles.bitesTypo]}>Bites</Text>
      <Text style={[styles.discover, styles.bitesTypo]}>Discover</Text>
      <Text style={styles.ex}>Ex:</Text>
      <View style={[styles.searchBar1, styles.searchBar1Position]}>
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
      <Text style={[styles.text, styles.textTypo]}>2,432</Text>
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
      <Pressable
        style={styles.searchChild}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text
        style={[styles.surgingNvidiaStock, styles.textTypo]}
      >{`Surging Nvidia Stock Keeps Drawing In More Believers
`}</Text>
      <Text style={[styles.hAgo, styles.agoTypo]}>29h ago</Text>
      <Text style={[styles.text1, styles.text1Position]}>942</Text>
      <Image
        style={[styles.ellipse65LightIcon, styles.ellipse65IconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-65-light.png")}
      />
      <Image
        style={[styles.ellipse66LightIcon, styles.ellipse66IconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-66-light.png")}
      />
      <Image
        style={[styles.searchItem, styles.searchItemPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.searchInner, styles.searchLayout]}
        contentFit="cover"
        source={require("../assets/vector-65.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-66.png")}
      />
      <Image
        style={[styles.searchChild1, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
      <Text style={[styles.hAgo1, styles.text1Position]}>3h ago</Text>
      <Text style={[styles.text2, styles.text2Position]}>942</Text>
      <Image
        style={[styles.ellipse65LightIcon1, styles.ellipse65IconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-65-light.png")}
      />
      <Image
        style={[styles.ellipse66LightIcon1, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-66-light.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.searchChild2, styles.text2Position]}
        contentFit="cover"
        source={require("../assets/vector-65.png")}
      />
      <Image
        style={[styles.searchChild3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-66.png")}
      />
      <Image
        style={[styles.searchChild4, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
      <Text style={[styles.hAgo2, styles.text2Position]}>24h ago</Text>
      <Image
        style={[styles.image8Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image7Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image9Icon, styles.searchBar1Position]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bitesTypo: {
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.7,
    fontSize: FontSize.size_15xl,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  searchBar1Position: {
    left: 34,
    position: "absolute",
  },
  searchBorder: {
    borderWidth: 0.2,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    borderStyle: "solid",
    height: 19,
    position: "absolute",
  },
  searchPosition1: {
    top: 255,
    height: 19,
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
    fontFamily: FontFamily.rubikRegular,
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
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
  },
  lightIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.4%",
    height: "2.96%",
    position: "absolute",
    overflow: "hidden",
  },
  agoTypo: {
    left: "63.73%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
  },
  text1Position: {
    top: "80.3%",
    position: "absolute",
  },
  ellipse65IconLayout: {
    left: "38.67%",
    right: "59.2%",
    width: "2.13%",
    height: "0.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipse66IconPosition: {
    left: "37.33%",
    right: "57.87%",
    width: "4.8%",
    height: "1.48%",
  },
  searchItemPosition: {
    left: "57.6%",
    right: "38.67%",
    width: "3.73%",
    height: "1.72%",
  },
  searchLayout: {
    left: "57.07%",
    right: "42.4%",
    width: "0.53%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "61.33%",
    right: "38.13%",
    width: "0.53%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchChildLayout: {
    left: "58.67%",
    right: "40%",
    width: "1.33%",
    height: "0.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text2Position: {
    top: "92.86%",
    position: "absolute",
  },
  iconPosition1: {
    top: "92.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: 32,
    position: "absolute",
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
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    width: 286,
    opacity: 0.4,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.rubikRegular,
    left: 39,
    position: "absolute",
  },
  bites: {
    top: 106,
    left: 146,
  },
  discover: {
    top: 299,
    left: 71,
  },
  ex: {
    top: 229,
    fontSize: FontSize.size_base,
    color: Color.colorDarkgray,
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    left: 39,
    position: "absolute",
  },
  searchBarChild: {
    width: 125,
  },
  searchBar1: {
    height: 19,
    width: 125,
    top: 255,
  },
  searchBarItem: {
    width: 135,
  },
  searchBar2: {
    left: 165,
    width: 135,
    height: 19,
    position: "absolute",
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
  text: {
    top: "66.26%",
    left: "44%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  viewLightIcon: {
    top: "65.89%",
    right: "57.07%",
    bottom: "31.16%",
    left: "36.53%",
  },
  alarmclockLightIcon: {
    top: "65.64%",
    right: "37.33%",
    bottom: "31.4%",
    left: "56.27%",
  },
  searchChild: {
    height: "12.68%",
    width: "87.73%",
    top: "57.14%",
    right: "6.13%",
    bottom: "30.17%",
    left: "6.13%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGainsboro_200,
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  surgingNvidiaStock: {
    width: "47.73%",
    top: "58%",
    left: "38.13%",
    position: "absolute",
  },
  hAgo: {
    top: "66.13%",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    left: "44%",
  },
  ellipse65LightIcon: {
    top: "80.67%",
    bottom: "18.35%",
  },
  ellipse66LightIcon: {
    bottom: "18.1%",
    top: "80.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchItem: {
    bottom: "17.86%",
    top: "80.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchInner: {
    bottom: "19.46%",
    top: "80.3%",
    position: "absolute",
  },
  vectorIcon: {
    top: "80.17%",
    bottom: "19.58%",
  },
  searchChild1: {
    top: "80.73%",
    bottom: "18.97%",
  },
  hAgo1: {
    left: "63.73%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
  },
  text2: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    left: "44%",
  },
  ellipse65LightIcon1: {
    top: "93.23%",
    bottom: "5.79%",
  },
  ellipse66LightIcon1: {
    bottom: "5.54%",
    left: "37.33%",
    right: "57.87%",
    width: "4.8%",
    height: "1.48%",
  },
  ellipseIcon: {
    bottom: "5.3%",
    left: "57.6%",
    right: "38.67%",
    width: "3.73%",
    height: "1.72%",
  },
  searchChild2: {
    bottom: "6.9%",
    left: "57.07%",
    right: "42.4%",
    width: "0.53%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  searchChild3: {
    top: "92.73%",
    bottom: "7.02%",
  },
  searchChild4: {
    top: "93.29%",
    bottom: "6.4%",
  },
  hAgo2: {
    left: "63.73%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
  },
  image8Icon: {
    top: 583,
    width: 96,
    height: 89,
  },
  image7Icon: {
    top: 471,
    width: 97,
    height: 88,
  },
  image9Icon: {
    top: 688,
    width: 92,
    height: 92,
  },
  search: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Search;
