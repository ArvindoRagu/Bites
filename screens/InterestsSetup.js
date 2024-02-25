import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const InterestsSetup = () => {
  const [ellipseCheckboxchecked, setEllipseCheckboxchecked] = useState(false);
  const [ellipseCheckbox1checked, setEllipseCheckbox1checked] = useState(false);
  const [ellipseCheckbox2checked, setEllipseCheckbox2checked] = useState(false);
  const [ellipseCheckbox3checked, setEllipseCheckbox3checked] = useState(false);
  const [ellipseCheckbox4checked, setEllipseCheckbox4checked] = useState(false);
  const [ellipseCheckbox5checked, setEllipseCheckbox5checked] = useState(false);
  const [ellipseCheckbox6checked, setEllipseCheckbox6checked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.interestsSetup}>
      <Text style={styles.whatAreYour}>What are your interests?</Text>
      <Pressable
        style={[styles.password, styles.passwordPosition]}
        onPress={() => navigation.navigate("MainPage")}
      >
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Text style={styles.password1}>Continue</Text>
      </Pressable>
      <View style={[styles.interestsSetupInner, styles.interestsInnerLayout]}>
        <CheckBox
          style={styles.componentChild}
          checked={ellipseCheckboxchecked}
          onPress={() => setEllipseCheckboxchecked(!ellipseCheckboxchecked)}
          checkedColor="#d9d9d9"
          containerStyle={styles.ellipseCheckboxLayout}
        />
      </View>
      <View style={[styles.interestsSetupChild, styles.interestsInnerLayout]}>
        <CheckBox
          style={styles.componentChild}
          checked={ellipseCheckbox1checked}
          onPress={() => setEllipseCheckbox1checked(!ellipseCheckbox1checked)}
          checkedColor="#d9d9d9"
          containerStyle={styles.ellipseCheckbox1Layout}
        />
      </View>
      <View style={[styles.ellipseView, styles.interestsInnerPosition]}>
        <CheckBox
          style={styles.componentChild}
          checked={ellipseCheckbox2checked}
          onPress={() => setEllipseCheckbox2checked(!ellipseCheckbox2checked)}
          checkedColor="#d9d9d9"
          containerStyle={styles.ellipseCheckbox2Layout}
        />
      </View>
      <View
        style={[styles.interestsSetupInner1, styles.interestsInnerPosition]}
      >
        <CheckBox
          style={styles.componentChild}
          checked={ellipseCheckbox3checked}
          onPress={() => setEllipseCheckbox3checked(!ellipseCheckbox3checked)}
          checkedColor="#d9d9d9"
          containerStyle={styles.ellipseCheckbox3Layout}
        />
      </View>
      <View
        style={[styles.interestsSetupInner2, styles.interestsInnerPosition]}
      >
        <CheckBox
          style={styles.componentChild}
          checked={ellipseCheckbox4checked}
          onPress={() => setEllipseCheckbox4checked(!ellipseCheckbox4checked)}
          checkedColor="#d9d9d9"
          containerStyle={styles.ellipseCheckbox4Layout}
        />
      </View>
      <View style={[styles.interestsSetupInner3, styles.interestsInnerLayout]}>
        <CheckBox
          style={styles.componentChild}
          checked={ellipseCheckbox5checked}
          onPress={() => setEllipseCheckbox5checked(!ellipseCheckbox5checked)}
          checkedColor="#d9d9d9"
          containerStyle={styles.ellipseCheckbox5Layout}
        />
      </View>
      <Text style={[styles.entertainment, styles.otherTypo]}>
        Entertainment
      </Text>
      <Text style={[styles.lifestyle, styles.politicsTypo]}>Lifestyle</Text>
      <Text style={[styles.other, styles.otherTypo]}>Other</Text>
      <Text style={[styles.politics, styles.politicsTypo]}>Politics</Text>
      <Text
        style={[styles.artLiterature, styles.politicsTypo]}
      >{`Art & Literature`}</Text>
      <View style={styles.component5}>
        <CheckBox
          style={styles.componentChild}
          checked={ellipseCheckbox6checked}
          onPress={() => setEllipseCheckbox6checked(!ellipseCheckbox6checked)}
          checkedColor="#d9d9d9"
          containerStyle={styles.ellipseCheckbox6Layout}
        />
        <Text
          style={[styles.scienceTech, styles.otherTypo]}
        >{`Science & Tech`}</Text>
      </View>
      <Text style={[styles.finance, styles.otherTypo]}>Finance</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={styles.interestsSetupItem}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  ellipseCheckbox1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  ellipseCheckbox2Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  ellipseCheckbox3Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  ellipseCheckbox4Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  ellipseCheckbox5Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  ellipseCheckbox6Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: "7.87%",
    right: "7.87%",
    top: "0%",
    bottom: "30.56%",
    position: "absolute",
  },
  passwordPosition: {
    height: 52,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  interestsInnerLayout: {
    height: 75,
    width: 75,
    position: "absolute",
  },
  interestsInnerPosition: {
    top: 380,
    height: 75,
    width: 75,
    position: "absolute",
  },
  otherTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikSemiBold,
    fontWeight: "600",
    lineHeight: 30,
    position: "absolute",
  },
  politicsTypo: {
    top: 458,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikSemiBold,
    fontWeight: "600",
    lineHeight: 30,
    position: "absolute",
  },
  whatAreYour: {
    top: 147,
    left: 60,
    fontSize: FontSize.size_11xl,
    width: 256,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikSemiBold,
    fontWeight: "600",
    lineHeight: 30,
    position: "absolute",
  },
  passwordChild: {
    marginTop: -26,
    marginLeft: -163.5,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorMediumpurple,
  },
  password1: {
    marginTop: -10,
    marginLeft: -147.5,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: Color.colorGray,
    width: 286,
    opacity: 0.4,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  password: {
    marginTop: 252,
    marginLeft: -161.5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  componentChild: {
    backgroundColor: Color.colorGainsboro_100,
  },
  interestsSetupInner: {
    left: 35,
    top: 269,
  },
  interestsSetupChild: {
    top: 491,
    left: 147,
  },
  ellipseView: {
    left: 261,
  },
  interestsSetupInner1: {
    left: 147,
  },
  interestsSetupInner2: {
    left: 35,
  },
  interestsSetupInner3: {
    left: 147,
    top: 269,
  },
  entertainment: {
    left: 29,
    top: 347,
    fontSize: FontSize.size_xs,
  },
  lifestyle: {
    left: 273,
  },
  other: {
    top: 566,
    left: 168,
  },
  politics: {
    left: 164,
  },
  artLiterature: {
    left: 26,
  },
  scienceTech: {
    top: "72.22%",
    left: "0%",
  },
  component5: {
    left: 254,
    width: 89,
    height: 108,
    top: 269,
    position: "absolute",
  },
  finance: {
    left: 161,
    top: 347,
    fontSize: FontSize.size_xs,
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "7.64%",
    right: "80%",
    bottom: "90.64%",
    left: "17.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  interestsSetupItem: {
    height: "3.94%",
    width: "8.8%",
    top: "6.53%",
    right: "76.27%",
    bottom: "89.53%",
    left: "14.93%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  interestsSetup: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default InterestsSetup;
