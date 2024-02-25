import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.componentParent}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo3]}>{`1,239 `}</Text>
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
            style={[styles.instanceChild, styles.childBorder]}
            onPress={() => navigation.navigate("YourInfocastPageFromMain")}
          />
          <Text
            style={[styles.attCustomersHit, styles.image2IconPosition1]}
          >{`AT&T customers hit by widespread cellular outages in U.S.`}</Text>
          <Text style={[styles.hAgo, styles.textTypo3]}>12h ago</Text>
          <Image
            style={[styles.image2Icon, styles.image2IconPosition1]}
            contentFit="cover"
            source={require("../assets/image2.png")}
          />
        </View>
      </View>
      <View style={styles.group}>
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
          style={[styles.groupChild, styles.childBorder]}
          onPress={() => navigation.navigate("YourInfocastPageFromMain")}
        />
        <Text
          style={[styles.surgingNvidiaStock, styles.hongKongInformsPosition]}
        >{`Surging Nvidia Stock Keeps Drawing In More Believers
`}</Text>
        <Text style={[styles.hAgo1, styles.agoTypo]}>29h ago</Text>
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
      </View>
      <View style={styles.group}>
        <Text style={[styles.text2, styles.textTypo3]}>942</Text>
        <Image
          style={[styles.ellipse65LightIcon, styles.ellipse65IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-65-light.png")}
        />
        <Image
          style={[styles.ellipse66LightIcon, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-66-light.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-54.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-65.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-66.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-64.png")}
        />
        <Text style={[styles.hAgo2, styles.textTypo3]}>3h ago</Text>
        <Image
          style={styles.image8Icon}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
        <Pressable
          style={[styles.groupChild, styles.childBorder]}
          onPress={() => navigation.navigate("YourInfocastPageFromMain")}
        />
        <Text
          style={[styles.berkshireHathawayRamps, styles.hongKongInformsTypo]}
        >
          Berkshire Hathaway ramps up buying in secret stock. Here's what we
          know.
        </Text>
      </View>
      <View style={styles.group}>
        <Text style={[styles.text3, styles.textTypo2]}>942</Text>
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
          style={[styles.groupChild2, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-65.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-66.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-64.png")}
        />
        <Text style={[styles.hAgo3, styles.agoTypo]}>24h ago</Text>
        <Image
          style={styles.image9Icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Pressable
          style={[styles.groupChild, styles.childBorder]}
          onPress={() => navigation.navigate("YourInfocastPageFromMain")}
        />
        <Text style={[styles.hongKongInforms, styles.hongKongInformsTypo]}>
          Hong Kong informs on 2023 food incident monitoring
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo3: {
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
    bottom: "9.71%",
    top: "66.99%",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  image2IconPosition1: {
    top: "6.8%",
    position: "absolute",
  },
  textTypo2: {
    left: "43.16%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  lightIconLayout2: {
    width: "7.29%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "23.3%",
    position: "absolute",
  },
  hongKongInformsPosition: {
    left: "36.47%",
    top: "6.8%",
  },
  agoTypo: {
    left: "65.65%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  ellipse65IconLayout: {
    width: "2.43%",
    height: "7.77%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupItemPosition: {
    top: "75.73%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupItemLayout: {
    width: "4.26%",
    height: "13.59%",
  },
  groupChildLayout1: {
    width: "0.61%",
    height: "1.94%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChildLayout: {
    width: "1.52%",
    height: "2.43%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  hongKongInformsTypo: {
    width: "58.66%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  iconPosition: {
    top: "69.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
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
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  alarmclockLightIcon: {
    right: "35.91%",
    left: "56.97%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  hAgo: {
    left: "64.09%",
    top: "70.87%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  parent: {
    width: 337,
    height: 103,
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
  groupChild: {
    right: "0%",
    width: "100%",
  },
  surgingNvidiaStock: {
    width: "54.41%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  hAgo1: {
    top: "70.87%",
  },
  image7Icon: {
    top: 7,
    left: 9,
    width: 97,
    height: 88,
    position: "absolute",
  },
  group: {
    width: 329,
    marginTop: 10,
    height: 103,
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
  groupItem: {
    right: "37.39%",
    bottom: "10.68%",
    left: "58.36%",
    top: "75.73%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupInner: {
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
  groupChild1: {
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
    top: 8,
    left: 8,
    width: 96,
    height: 89,
    position: "absolute",
  },
  berkshireHathawayRamps: {
    top: "11.65%",
    left: "36.17%",
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
  groupChild2: {
    right: "41.34%",
    bottom: "29.13%",
    left: "58.05%",
    top: "68.93%",
  },
  groupChild3: {
    top: "67.96%",
    right: "36.47%",
    bottom: "30.1%",
    left: "62.92%",
  },
  groupChild4: {
    top: "72.33%",
    right: "38.6%",
    bottom: "25.24%",
    left: "59.88%",
  },
  hAgo3: {
    top: "68.93%",
  },
  image9Icon: {
    top: 5,
    left: 11,
    width: 92,
    height: 92,
    position: "absolute",
  },
  hongKongInforms: {
    left: "36.47%",
    top: "6.8%",
  },
  componentParent: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default Frame;
