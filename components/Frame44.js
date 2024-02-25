import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.componentParent}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo2]}>{`1,239 `}</Text>
        <Image
          style={[styles.viewLightIcon, styles.iconLayout1]}
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
            style={styles.instanceChild}
            onPress={() => navigation.navigate("YourInfocastPageFromMain")}
          />
          <Text
            style={[styles.attCustomersHit, styles.image2IconPosition1]}
          >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
          <Text style={[styles.hAgo, styles.textTypo2]}>12h ago</Text>
          <Image
            style={[styles.image2Icon, styles.image2IconPosition1]}
            contentFit="cover"
            source={require("../assets/image2.png")}
          />
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo2]}>2,432</Text>
      <Image
        style={[styles.viewLightIcon1, styles.lightIconLayout2]}
        contentFit="cover"
        source={require("../assets/view-light.png")}
      />
      <Image
        style={[styles.alarmclockLightIcon1, styles.lightIconLayout2]}
        contentFit="cover"
        source={require("../assets/alarmclock-light.png")}
      />
      <Pressable
        style={[styles.frameChild, styles.frameChildLayout2]}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text
        style={[styles.surgingNvidiaStock, styles.textTypo2]}
      >{`Surging Nvidia Stock Keeps Drawing In More Believers
`}</Text>
      <Text style={[styles.hAgo1, styles.agoTypo]}>29h ago</Text>
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={[styles.text2, styles.text2Position]}>942</Text>
      <Image
        style={[styles.ellipse65LightIcon, styles.ellipse65IconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-65-light.png")}
      />
      <Image
        style={[styles.ellipse66LightIcon, styles.frameItemPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-66-light.png")}
      />
      <Image
        style={[styles.frameItem, styles.frameItemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.frameInner, styles.frameChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-65.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.frameChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-66.png")}
      />
      <Image
        style={[styles.frameChild1, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
      <Text style={[styles.hAgo2, styles.text2Position]}>3h ago</Text>
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.frameChildLayout2]}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text style={[styles.berkshireHathawayRamps, styles.hongKongInformsTypo]}>
        Berkshire Hathaway ramps up buying in secret stock. Here's what we know.
      </Text>
      <Text style={[styles.text3, styles.text3Position]}>942</Text>
      <Image
        style={[styles.ellipse65LightIcon1, styles.ellipse65IconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-65-light.png")}
      />
      <Image
        style={[styles.ellipse66LightIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-66-light.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.frameChild2, styles.text3Position]}
        contentFit="cover"
        source={require("../assets/vector-65.png")}
      />
      <Image
        style={[styles.frameChild3, styles.frameChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-66.png")}
      />
      <Image
        style={[styles.frameChild4, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
      <Text style={[styles.hAgo3, styles.text3Position]}>24h ago</Text>
      <Image
        style={styles.image9Icon}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Pressable
        style={[styles.frameChild5, styles.frameChildLayout2]}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text style={[styles.hongKongInforms, styles.hongKongInformsTypo]}>
        Hong Kong informs on 2023 food incident monitoring
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  alarmclockIconPosition: {
    left: "56.97%",
    right: "35.91%",
  },
  image2IconPosition1: {
    top: "6.8%",
    position: "absolute",
  },
  lightIconLayout2: {
    height: "5.43%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.12%",
    position: "absolute",
  },
  frameChildLayout2: {
    right: "1.19%",
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    width: "97.63%",
    left: "1.19%",
    height: "23.3%",
    position: "absolute",
  },
  agoTypo: {
    left: "65.28%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  text2Position: {
    top: "68.55%",
    position: "absolute",
  },
  ellipse65IconLayout: {
    width: "2.37%",
    height: "1.81%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameItemPosition: {
    top: "68.78%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameItemLayout: {
    width: "4.15%",
    height: "3.17%",
  },
  frameChildLayout1: {
    width: "0.59%",
    height: "0.45%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  frameChildLayout: {
    width: "1.48%",
    height: "0.57%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  hongKongInformsTypo: {
    width: "57.27%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  text3Position: {
    top: "92.76%",
    position: "absolute",
  },
  iconPosition: {
    top: "92.99%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    top: "71.84%",
    left: "43.32%",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  viewLightIcon: {
    top: "68.93%",
    bottom: "7.77%",
    left: "35.01%",
    right: "57.86%",
    width: "7.12%",
    height: "23.3%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  alarmclockLightIcon: {
    top: "66.99%",
    bottom: "9.71%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.12%",
    height: "23.3%",
    position: "absolute",
  },
  instanceChild: {
    right: "2.37%",
    left: "0%",
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    width: "97.63%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  attCustomersHit: {
    width: "64.39%",
    left: "35.61%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  hAgo: {
    top: "70.87%",
    left: "64.09%",
    position: "absolute",
  },
  image2Icon: {
    height: "86.41%",
    width: "29.38%",
    right: "67.95%",
    bottom: "6.8%",
    left: "2.67%",
    borderRadius: Border.br_9xs,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  rectangleParent: {
    right: "-1.19%",
    left: "1.19%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  parent: {
    top: 0,
    left: 0,
    width: 337,
    height: 103,
    position: "absolute",
  },
  text1: {
    top: "42.31%",
    left: "43.32%",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  viewLightIcon1: {
    top: "41.63%",
    bottom: "52.94%",
    left: "35.01%",
    right: "57.86%",
  },
  alarmclockLightIcon1: {
    top: "41.18%",
    bottom: "53.39%",
    left: "56.97%",
    right: "35.91%",
  },
  frameChild: {
    top: "25.57%",
    bottom: "51.13%",
  },
  surgingNvidiaStock: {
    width: "53.12%",
    top: "27.15%",
    left: "36.8%",
    position: "absolute",
  },
  hAgo1: {
    top: "42.08%",
    position: "absolute",
  },
  image7Icon: {
    top: 120,
    left: 13,
    width: 97,
    height: 88,
    position: "absolute",
  },
  text2: {
    left: "43.03%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  ellipse65LightIcon: {
    top: "69.23%",
    right: "60.53%",
    bottom: "28.96%",
    left: "37.09%",
  },
  ellipse66LightIcon: {
    right: "59.05%",
    bottom: "28.51%",
    width: "5.34%",
    height: "2.71%",
    left: "35.61%",
  },
  frameItem: {
    right: "37.69%",
    bottom: "28.05%",
    left: "58.16%",
    top: "68.78%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameInner: {
    right: "41.84%",
    bottom: "31%",
    left: "57.57%",
    top: "68.55%",
    position: "absolute",
  },
  vectorIcon: {
    top: "68.33%",
    right: "37.09%",
    bottom: "31.22%",
    left: "62.31%",
    position: "absolute",
  },
  frameChild1: {
    top: "69.34%",
    right: "39.17%",
    bottom: "30.09%",
    left: "59.35%",
  },
  hAgo2: {
    left: "64.99%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  image8Icon: {
    top: 234,
    left: 12,
    width: 96,
    height: 89,
    position: "absolute",
  },
  rectanglePressable: {
    top: "51.13%",
    bottom: "25.57%",
  },
  berkshireHathawayRamps: {
    top: "53.85%",
    left: "36.5%",
  },
  text3: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    left: "43.32%",
  },
  ellipse65LightIcon1: {
    top: "93.44%",
    right: "60.24%",
    bottom: "4.75%",
    left: "37.39%",
  },
  ellipse66LightIcon1: {
    right: "58.75%",
    bottom: "4.3%",
    left: "35.91%",
    width: "5.34%",
    height: "2.71%",
  },
  ellipseIcon: {
    right: "37.39%",
    bottom: "3.85%",
    left: "58.46%",
    width: "4.15%",
    height: "3.17%",
  },
  frameChild2: {
    right: "41.54%",
    bottom: "6.79%",
    left: "57.86%",
    width: "0.59%",
    height: "0.45%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  frameChild3: {
    top: "92.53%",
    right: "36.8%",
    bottom: "7.01%",
    left: "62.61%",
    position: "absolute",
  },
  frameChild4: {
    top: "93.55%",
    right: "38.87%",
    bottom: "5.88%",
    left: "59.64%",
  },
  hAgo3: {
    left: "65.28%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  image9Icon: {
    top: 344,
    left: 15,
    width: 92,
    height: 92,
    position: "absolute",
  },
  frameChild5: {
    top: "76.7%",
    bottom: "0%",
    right: "1.19%",
  },
  hongKongInforms: {
    top: "78.28%",
    left: "36.8%",
  },
  componentParent: {
    flex: 1,
    height: 442,
    width: "100%",
  },
});

export default Frame11;
