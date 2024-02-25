import * as React from "react";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Search11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
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
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo6]}>{`1,239 `}</Text>
        <Image
          style={[styles.viewLightIcon, styles.iconLayout4]}
          contentFit="cover"
          source={require("../assets/view-light.png")}
        />
        <Image
          style={[styles.alarmclockLightIcon, styles.alarmclockIconPosition]}
          contentFit="cover"
          source={require("../assets/alarmclock-light.png")}
        />
        <View style={styles.rectangleParent}>
          <Pressable
            style={[styles.instanceChild, styles.childBorder]}
            onPress={() => navigation.navigate("YourInfocastPageFromMain")}
          />
          <Text
            style={[styles.attCustomersHit, styles.iconPosition3]}
          >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
          <Text style={[styles.hAgo, styles.textTypo6]}>12h ago</Text>
          <Image
            style={[styles.image2Icon, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/image2.png")}
          />
        </View>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={[styles.text1, styles.textTypo5]}>2,432</Text>
        <Image
          style={[styles.viewLightIcon1, styles.lightIconLayout4]}
          contentFit="cover"
          source={require("../assets/view-light.png")}
        />
        <Image
          style={[styles.alarmclockLightIcon1, styles.lightIconLayout4]}
          contentFit="cover"
          source={require("../assets/alarmclock-light.png")}
        />
        <Pressable
          style={[styles.componentChild, styles.childBorder]}
          onPress={() => navigation.navigate("YourInfocastPageFromMain")}
        />
        <Text
          style={[styles.surgingNvidiaStock, styles.hongKongInformsPosition]}
        >{`Surging Nvidia Stock Keeps Drawing In More Believers
`}</Text>
        <Text style={[styles.hAgo1, styles.agoTypo]}>29h ago</Text>
        <Image
          style={[styles.image7Icon, styles.iconPosition3]}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
      </View>
      <View style={[styles.container, styles.groupLayout]}>
        <Text style={[styles.text2, styles.textTypo6]}>942</Text>
        <Image
          style={[styles.ellipse65LightIcon, styles.ellipse65IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-65-light.png")}
        />
        <Image
          style={[styles.ellipse66LightIcon, styles.componentItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-66-light.png")}
        />
        <Image
          style={[styles.componentItem, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-54.png")}
        />
        <Image
          style={[styles.componentInner, styles.componentChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-65.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.componentChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-66.png")}
        />
        <Image
          style={[styles.componentChild1, styles.componentChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-64.png")}
        />
        <Text style={[styles.hAgo2, styles.textTypo6]}>3h ago</Text>
        <Image
          style={[styles.image8Icon, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
        <Pressable
          style={[styles.componentChild, styles.childBorder]}
          onPress={() => navigation.navigate("YourInfocastPageFromMain")}
        />
        <Text
          style={[styles.berkshireHathawayRamps, styles.hongKongInformsTypo]}
        >
          Berkshire Hathaway ramps up buying in secret stock. Here's what we
          know.
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <Text style={[styles.text3, styles.textTypo5]}>942</Text>
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
          style={[styles.componentChild2, styles.componentChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-65.png")}
        />
        <Image
          style={[styles.componentChild3, styles.componentChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-66.png")}
        />
        <Image
          style={[styles.componentChild4, styles.componentChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-64.png")}
        />
        <Text style={[styles.hAgo3, styles.agoTypo]}>24h ago</Text>
        <Image
          style={[styles.image9Icon, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Pressable
          style={[styles.componentChild, styles.childBorder]}
          onPress={() => navigation.navigate("YourInfocastPageFromMain")}
        />
        <Text style={[styles.hongKongInforms, styles.hongKongInformsTypo]}>
          Hong Kong informs on 2023 food incident monitoring
        </Text>
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image1.png")}
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
  searchPosition1: {
    top: 255,
    height: 19,
    position: "absolute",
  },
  searchBorder: {
    borderWidth: 0.2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    height: 19,
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
  textTypo6: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
  },
  iconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  alarmclockIconPosition: {
    bottom: "9.71%",
    top: "66.99%",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    position: "absolute",
  },
  iconPosition3: {
    top: "6.8%",
    position: "absolute",
  },
  groupLayout: {
    width: 329,
    left: 23,
    height: 103,
    position: "absolute",
  },
  textTypo5: {
    left: "43.16%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  lightIconLayout4: {
    width: "7.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "23.3%",
    position: "absolute",
    overflow: "hidden",
  },
  hongKongInformsPosition: {
    left: "36.47%",
    top: "6.8%",
  },
  agoTypo: {
    left: "65.65%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  ellipse65IconLayout: {
    width: "2.43%",
    height: "7.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  componentItemPosition: {
    top: "75.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconLayout: {
    width: "4.26%",
    height: "13.59%",
  },
  componentChildLayout1: {
    width: "0.61%",
    height: "1.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  componentChildLayout: {
    width: "1.52%",
    height: "2.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition2: {
    bottom: "5.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hongKongInformsTypo: {
    width: "58.66%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  iconPosition1: {
    top: "69.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  text: {
    left: "43.32%",
    top: "71.84%",
    position: "absolute",
  },
  viewLightIcon: {
    right: "57.86%",
    left: "35.01%",
    bottom: "7.77%",
    top: "68.93%",
    width: "7.12%",
    height: "23.3%",
    maxWidth: "100%",
    position: "absolute",
  },
  alarmclockLightIcon: {
    right: "35.91%",
    left: "56.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "7.12%",
    height: "23.3%",
    position: "absolute",
  },
  instanceChild: {
    width: "97.63%",
    right: "2.37%",
  },
  attCustomersHit: {
    width: "64.39%",
    left: "35.61%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
  },
  hAgo: {
    left: "64.09%",
    top: "70.87%",
    position: "absolute",
  },
  image2Icon: {
    width: "29.38%",
    right: "67.95%",
    bottom: "6.8%",
    left: "2.67%",
    borderRadius: Border.br_9xs,
    height: "86.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    right: "-1.19%",
    left: "1.19%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  parent: {
    top: 354,
    width: 337,
    height: 103,
    left: 19,
    position: "absolute",
  },
  text1: {
    top: "71.84%",
  },
  viewLightIcon1: {
    right: "58.05%",
    left: "34.65%",
    bottom: "7.77%",
    top: "68.93%",
  },
  alarmclockLightIcon1: {
    right: "35.56%",
    left: "57.14%",
    bottom: "9.71%",
    top: "66.99%",
  },
  componentChild: {
    right: "0%",
    width: "100%",
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    left: "0%",
  },
  surgingNvidiaStock: {
    width: "54.41%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  hAgo1: {
    top: "70.87%",
  },
  image7Icon: {
    height: "85.44%",
    width: "29.48%",
    right: "67.78%",
    left: "2.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "7.77%",
  },
  group: {
    top: 467,
  },
  text2: {
    left: "42.86%",
    top: "74.76%",
    position: "absolute",
  },
  ellipse65LightIcon: {
    top: "77.67%",
    right: "60.79%",
    bottom: "14.56%",
    left: "36.78%",
  },
  ellipse66LightIcon: {
    right: "59.27%",
    bottom: "12.62%",
    left: "35.26%",
    width: "5.47%",
    height: "11.65%",
  },
  componentItem: {
    right: "37.39%",
    bottom: "10.68%",
    left: "58.36%",
    top: "75.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  componentInner: {
    right: "41.64%",
    bottom: "23.3%",
    left: "57.75%",
    top: "74.76%",
  },
  vectorIcon: {
    top: "73.79%",
    right: "36.78%",
    bottom: "24.27%",
    left: "62.61%",
  },
  componentChild1: {
    top: "78.16%",
    right: "38.91%",
    bottom: "19.42%",
    left: "59.57%",
  },
  hAgo2: {
    left: "65.35%",
    top: "74.76%",
    position: "absolute",
  },
  image8Icon: {
    width: "29.18%",
    top: "7.77%",
    right: "68.39%",
    left: "2.43%",
    height: "86.41%",
  },
  berkshireHathawayRamps: {
    top: "11.65%",
    left: "36.17%",
  },
  container: {
    top: 580,
  },
  text3: {
    top: "68.93%",
  },
  ellipse65LightIcon1: {
    right: "60.49%",
    bottom: "20.39%",
    left: "37.08%",
    top: "71.84%",
  },
  ellipse66LightIcon1: {
    right: "58.97%",
    bottom: "18.45%",
    left: "35.56%",
    width: "5.47%",
    height: "11.65%",
  },
  ellipseIcon: {
    right: "37.08%",
    bottom: "16.5%",
    left: "58.66%",
    width: "4.26%",
    height: "13.59%",
  },
  componentChild2: {
    right: "41.34%",
    bottom: "29.13%",
    left: "58.05%",
    top: "68.93%",
  },
  componentChild3: {
    top: "67.96%",
    right: "36.47%",
    bottom: "30.1%",
    left: "62.92%",
  },
  componentChild4: {
    top: "72.33%",
    right: "38.6%",
    bottom: "25.24%",
    left: "59.88%",
  },
  hAgo3: {
    top: "68.93%",
  },
  image9Icon: {
    height: "89.32%",
    width: "27.96%",
    top: "4.85%",
    right: "68.69%",
    left: "3.34%",
  },
  hongKongInforms: {
    left: "36.47%",
    top: "6.8%",
  },
  groupView: {
    top: 693,
  },
  image1Icon: {
    top: 296,
    width: 46,
    height: 45,
    left: 19,
    position: "absolute",
  },
  search: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Search11;
