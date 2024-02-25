import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Group2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo]}>942</Text>
      <Image
        style={[styles.ellipse65LightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-65-light.png")}
      />
      <Image
        style={[styles.ellipse66LightIcon, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-66-light.png")}
      />
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/vector-65.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/vector-66.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector-64.png")}
      />
      <Text style={[styles.hAgo, styles.textTypo]}>24h ago</Text>
      <Image
        style={styles.image9Icon}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      />
      <Text style={[styles.hongKongInforms, styles.textTypo]}>
        Hong Kong informs on 2023 food incident monitoring
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChildPosition: {
    top: "69.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupLayout: {
    width: "0.61%",
    height: "1.94%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    left: "43.16%",
    top: "68.93%",
  },
  ellipse65LightIcon: {
    height: "7.77%",
    width: "2.43%",
    top: "71.84%",
    right: "60.49%",
    bottom: "20.39%",
    left: "37.08%",
  },
  ellipse66LightIcon: {
    height: "11.65%",
    width: "5.47%",
    right: "58.97%",
    bottom: "18.45%",
    left: "35.56%",
  },
  groupChild: {
    height: "13.59%",
    width: "4.26%",
    right: "37.08%",
    bottom: "16.5%",
    left: "58.66%",
  },
  groupItem: {
    right: "41.34%",
    bottom: "29.13%",
    left: "58.05%",
    top: "68.93%",
  },
  groupInner: {
    top: "67.96%",
    right: "36.47%",
    bottom: "30.1%",
    left: "62.92%",
  },
  vectorIcon: {
    height: "2.43%",
    width: "1.52%",
    top: "72.33%",
    right: "38.6%",
    bottom: "25.24%",
    left: "59.88%",
  },
  hAgo: {
    left: "65.65%",
    top: "68.93%",
  },
  image9Icon: {
    top: 5,
    left: 11,
    width: 92,
    height: 92,
    position: "absolute",
  },
  rectanglePressable: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  hongKongInforms: {
    width: "58.66%",
    top: "6.8%",
    left: "36.47%",
  },
  parent: {
    flex: 1,
    height: 103,
    width: "100%",
  },
});

export default Group2;
