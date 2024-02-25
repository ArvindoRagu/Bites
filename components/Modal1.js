import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Modal1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.modal}>
      <Image
        style={[styles.baseindicatorIcon, styles.modalChildLayout]}
        contentFit="cover"
        source={require("../assets/positiontop.png")}
      />
      <Image
        style={[styles.modalChild, styles.modalChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Text style={[styles.highlights, styles.highlightsFlexBox]}>
        Highlights
      </Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
      </Pressable>
      <Image
        style={[styles.modalItem, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Pressable
        style={[styles.yourInfocast, styles.yourInfocastPosition]}
        onPress={() => navigation.navigate("YourInfocastPageFromMain")}
      >
        <Text style={styles.viewFullPageTypo}>Your Infocast</Text>
      </Pressable>
      <Text style={[styles.viewFullPage, styles.viewFullPageTypo]}>
        View Full Page
      </Text>
      <Text
        style={[styles.dowJonesNasdaq, styles.highlightsFlexBox]}
      >{`Dow Jones, NASDAQ, and S&P 500 saw gains of 1.18%, 2.96%, and 2.11%, respectively.
Nvidia's earnings beat sparked a rally, particularly boosting tech stocks.
Minor fluctuations in commodities like Brent Crude and Gold, and currencies like EUR/USD and GBP/USD
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalChildLayout: {
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  highlightsFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  wrapperPosition: {
    height: "10.08%",
    bottom: "6.98%",
    top: "82.95%",
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_2xs,
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  yourInfocastPosition: {
    top: "84.11%",
    position: "absolute",
  },
  viewFullPageTypo: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  baseindicatorIcon: {
    height: "3.1%",
    width: "16.33%",
    top: "0%",
    right: "73.18%",
    bottom: "96.9%",
    left: "10.5%",
  },
  modalChild: {
    height: "96.12%",
    top: "3.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_9xl,
    width: "100%",
  },
  highlights: {
    top: "1.55%",
    left: "6.41%",
    fontSize: FontSize.size_xl,
    lineHeight: 80,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "51.02%",
    right: "9.91%",
    width: "39.07%",
  },
  modalItem: {
    width: "36.44%",
    right: "53.06%",
    height: "10.08%",
    bottom: "6.98%",
    top: "82.95%",
    position: "absolute",
    left: "10.5%",
  },
  yourInfocast: {
    left: "15.74%",
  },
  viewFullPage: {
    left: "55.98%",
    top: "84.11%",
    position: "absolute",
  },
  dowJonesNasdaq: {
    height: "53.49%",
    width: "93.29%",
    top: "25.97%",
    left: "2.33%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
  },
  modal: {
    width: 343,
    height: 258,
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

export default Modal1;
