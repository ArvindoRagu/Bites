import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OtherInterests = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otherInterests}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.otherInterests1}>Other Interests</Text>
      <Pressable
        style={styles.otherInterestsChild}
        onPress={() => navigation.goBack()}
      />
      <Pressable
        style={[styles.interest, styles.interestLayout]}
        onPress={() => navigation.navigate("ViewFullPageButtonFromMa1111111")}
      >
        <View style={[styles.interestChild, styles.interestLayout]} />
        <Text style={[styles.password, styles.passwordPosition]}>
          Entertainment
        </Text>
      </Pressable>
      <Image
        style={[styles.expandRightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <TextInput
        style={[styles.interest1, styles.passwordPosition]}
        placeholder="Add Interest... |"
        placeholderTextColor="#242424"
      />
      <Image
        style={[styles.addLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/add-light.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  interestLayout: {
    height: 60,
    width: 327,
  },
  passwordPosition: {
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 309,
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
  otherInterests1: {
    top: 156,
    left: 28,
    fontSize: FontSize.size_16xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.colorBlack,
    width: 319,
    textAlign: "left",
    position: "absolute",
  },
  otherInterestsChild: {
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
  interestChild: {
    marginTop: -30,
    marginLeft: -163.5,
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    left: "50%",
    top: "50%",
    width: 327,
    position: "absolute",
  },
  password: {
    marginTop: -11.5,
    marginLeft: -147.5,
    lineHeight: 20,
    color: Color.colorGray,
    display: "flex",
    alignItems: "center",
    width: 286,
    height: 23,
    opacity: 0.4,
    textAlign: "left",
  },
  interest: {
    marginTop: -184,
    left: "50%",
    top: "50%",
    width: 327,
    position: "absolute",
    marginLeft: -161.5,
  },
  expandRightIcon: {
    top: 240,
  },
  interest1: {
    marginTop: -103,
    height: 60,
    width: 327,
    marginLeft: -161.5,
  },
  addLightIcon: {
    top: 321,
  },
  otherInterests: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OtherInterests;
