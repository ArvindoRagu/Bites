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
      <CheckBox
        style={styles.interestsSetupChild}
        checked={ellipseCheckboxchecked}
        onPress={() => setEllipseCheckboxchecked(!ellipseCheckboxchecked)}
        checkedColor="#d9d9d9"
        containerStyle={styles.ellipseCheckboxLayout}
      />
      <CheckBox
        style={styles.interestsSetupChild}
        checked={ellipseCheckbox1checked}
        onPress={() => setEllipseCheckbox1checked(!ellipseCheckbox1checked)}
        checkedColor="#d9d9d9"
        containerStyle={styles.ellipseCheckbox1Layout}
      />
      <CheckBox
        style={styles.interestsSetupChild}
        checked={ellipseCheckbox2checked}
        onPress={() => setEllipseCheckbox2checked(!ellipseCheckbox2checked)}
        checkedColor="#d9d9d9"
        containerStyle={styles.ellipseCheckbox2Layout}
      />
      <CheckBox
        style={styles.interestsSetupChild}
        checked={ellipseCheckbox3checked}
        onPress={() => setEllipseCheckbox3checked(!ellipseCheckbox3checked)}
        checkedColor="#d9d9d9"
        containerStyle={styles.ellipseCheckbox3Layout}
      />
      <CheckBox
        style={styles.interestsSetupChild}
        checked={ellipseCheckbox4checked}
        onPress={() => setEllipseCheckbox4checked(!ellipseCheckbox4checked)}
        checkedColor="#d9d9d9"
        containerStyle={styles.ellipseCheckbox4Layout}
      />
      <CheckBox
        style={styles.interestsSetupChild}
        checked={ellipseCheckbox5checked}
        onPress={() => setEllipseCheckbox5checked(!ellipseCheckbox5checked)}
        checkedColor="#d9d9d9"
        containerStyle={styles.ellipseCheckbox5Layout}
      />
      <CheckBox
        style={styles.interestsSetupChild}
        checked={ellipseCheckbox6checked}
        onPress={() => setEllipseCheckbox6checked(!ellipseCheckbox6checked)}
        checkedColor="#d9d9d9"
        containerStyle={styles.ellipseCheckbox6Layout}
      />
      <Text style={[styles.entertainment, styles.otherTypo]}>
        Entertainment
      </Text>
      <Text style={[styles.lifestyle, styles.politicsTypo]}>Lifestyle</Text>
      <Text style={[styles.other, styles.otherTypo]}>Other</Text>
      <Text style={[styles.politics, styles.politicsTypo]}>Politics</Text>
      <Text
        style={[styles.artLiterature, styles.politicsTypo]}
      >{`Art & Literature`}</Text>
      <Text
        style={[styles.scienceTech, styles.otherTypo]}
      >{`Science & Tech`}</Text>
      <Text style={[styles.finance, styles.otherTypo]}>Finance</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 35,
    top: 269,
    position: "absolute",
  },
  ellipseCheckbox1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 147,
    top: 491,
    position: "absolute",
  },
  ellipseCheckbox2Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 261,
    top: 380,
    position: "absolute",
  },
  ellipseCheckbox3Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 147,
    top: 380,
    position: "absolute",
  },
  ellipseCheckbox4Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 35,
    top: 380,
    position: "absolute",
  },
  ellipseCheckbox5Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 261,
    top: 269,
    position: "absolute",
  },
  ellipseCheckbox6Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 147,
    top: 269,
    position: "absolute",
  },
  passwordPosition: {
    height: 52,
    width: 327,
    left: "50%",
    top: "50%",
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
  interestsSetupChild: {
    backgroundColor: Color.colorGainsboro_100,
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
    left: 254,
    top: 347,
    fontSize: FontSize.size_xs,
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
  rectanglePressable: {
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
