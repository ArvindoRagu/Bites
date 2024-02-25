import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, Switch } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Slider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const InterestPersonalizer = () => {
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState();
  const [rectangleSwitchSwitchValueState, setRectangleSwitchSwitchValueState] =
    useState(false);
  const [
    rectangleSwitch1SwitchValueState,
    setRectangleSwitch1SwitchValueState,
  ] = useState(false);
  const [rectangleSliderValue, setRectangleSliderValue] = useState(10);
  const navigation = useNavigation();

  return (
    <View style={styles.interestPersonalizer}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.interestName}>Interest Name</Text>
      <Pressable
        style={styles.interestPersonalizerChild}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.personalizeYourDaily, styles.americanVoice1Typo]}>
        Personalize your daily infocast
      </Text>
      <View
        style={[styles.interestPersonalizerItem, styles.interestPosition]}
      />
      <View
        style={[styles.interestPersonalizerInner, styles.interestPosition]}
      />
      <View style={styles.wrapper}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          value={rectangleDropdownValue}
          setValue={setRectangleDropdownValue}
          items={[]}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
        />
      </View>
      <Text style={styles.complexity}>Complexity</Text>
      <Text style={[styles.voicePreference, styles.controlsLayout]}>
        Voice Preference
      </Text>
      <Text style={[styles.controls, styles.controlsLayout]}>Controls</Text>
      <Text style={[styles.simple, styles.simpleTypo]}>Simple</Text>
      <Text style={[styles.moderate, styles.simpleTypo]}>Moderate</Text>
      <Text style={[styles.complex, styles.simpleTypo]}>Complex</Text>
      <Text style={[styles.americanVoice1, styles.americanVoice1Typo]}>
        American Voice 1
      </Text>
      <Image
        style={styles.expandDownIcon}
        contentFit="cover"
        source={require("../assets/expand-down.png")}
      />
      <Text style={[styles.censorLanguage, styles.notificationsTypo]}>
        CENSOR LANGUAGE
      </Text>
      <Text style={[styles.notifications, styles.notificationsTypo]}>
        NOTIFICATIONS
      </Text>
      <Switch
        style={[styles.rectangleSwitch, styles.rectangleSwitchLayout]}
        value={rectangleSwitchSwitchValueState}
        onValueChange={setRectangleSwitchSwitchValueState}
        trackColor={{ false: "#939393", true: "#ae79e2" }}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-99.png")}
      />
      <Switch
        style={[
          styles.interestPersonalizerChild1,
          styles.rectangleSwitchLayout,
        ]}
        value={rectangleSwitch1SwitchValueState}
        onValueChange={setRectangleSwitch1SwitchValueState}
        trackColor={{ false: "#939393", true: "#ae79e2" }}
      />
      <Image
        style={[styles.interestPersonalizerChild2, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-99.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-99.png")}
      />
      <Slider
        style={styles.rectangleSlider}
        minimumValue={1}
        maximumValue={100}
        orientation="horizontal"
        step="1"
        value={rectangleSliderValue}
        onValueChange={setRectangleSliderValue}
        thumbStyle={styles.rectangleSliderts}
        thumbTintColor="#ff0000"
        minimumTrackTintColor="#3f3f3f"
        maximumTrackTintColor="#b3b3b3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  rectangleSliderts: {
    height: 25,
    width: 25,
  },
  americanVoice1Typo: {
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  interestPosition: {
    width: 321,
    borderBottomWidth: 1,
    left: 25,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  controlsLayout: {
    width: 173,
    height: 21,
    left: 39,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  simpleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    top: 337,
    lineHeight: 20,
    color: Color.colorBlack,
    position: "absolute",
  },
  notificationsTypo: {
    opacity: 0.4,
    color: Color.colorGray,
    fontSize: FontSize.size_2xs,
    top: 643,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  rectangleSwitchLayout: {
    height: 38,
    width: 64,
    borderRadius: Border.br_base,
    top: 601,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 32,
    width: 31,
    top: 604,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "11.82%",
    right: "84.8%",
    bottom: "86.45%",
    left: "13.07%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  interestName: {
    top: 156,
    fontSize: FontSize.size_16xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    width: 319,
    textAlign: "left",
    color: Color.colorBlack,
    left: 28,
    position: "absolute",
  },
  interestPersonalizerChild: {
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
  personalizeYourDaily: {
    top: 196,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    left: 28,
  },
  interestPersonalizerItem: {
    top: 398,
    height: 139,
  },
  interestPersonalizerInner: {
    top: 537,
    height: 146,
  },
  dropdownpicker: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  wrapper: {
    top: 470,
    left: 43,
    width: 290,
    height: 40,
    borderRadius: Border.br_71xl,
    borderStyle: "solid",
    position: "absolute",
  },
  complexity: {
    top: 245,
    width: 147,
    height: 21,
    left: 39,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  voicePreference: {
    top: 426,
  },
  controls: {
    top: 565,
  },
  simple: {
    left: 50,
  },
  moderate: {
    left: 161,
  },
  complex: {
    left: 264,
  },
  americanVoice1: {
    top: 480,
    left: 57,
    fontSize: FontSize.title_size,
  },
  expandDownIcon: {
    top: 478,
    left: 291,
    width: 24,
    height: 24,
    position: "absolute",
  },
  censorLanguage: {
    left: 82,
    width: 112,
  },
  notifications: {
    left: 216,
    width: 81,
  },
  rectangleSwitch: {
    left: 221,
  },
  ellipseIcon: {
    left: 251,
  },
  interestPersonalizerChild1: {
    left: 102,
  },
  interestPersonalizerChild2: {
    left: 132,
  },
  rectangleSlider: {
    top: 308,
    width: 287,
    height: 6,
    left: 39,
    borderRadius: Border.br_71xl,
    position: "absolute",
  },
  interestPersonalizer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default InterestPersonalizer;
