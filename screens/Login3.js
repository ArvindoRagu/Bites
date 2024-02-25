import * as React from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Login3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login3}>
      <TextInput
        style={[styles.password, styles.passwordTypo]}
        placeholder="Username"
        placeholderTextColor="#242424"
      />
      <View style={styles.password1}>
        <View style={[styles.passwordChild, styles.passwordLayout]} />
        <TextInput
          style={[styles.password2, styles.passwordPosition1]}
          placeholder="Email"
          placeholderTextColor="#242424"
        />
        <TextInput
          style={[styles.password3, styles.passwordTypo]}
          placeholder="Password"
          placeholderTextColor="#242424"
        />
      </View>
      <Image
        style={[styles.login3Child, styles.login3Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-105.png")}
      />
      <Image
        style={[styles.login3Item, styles.login3Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-105.png")}
      />
      <Text style={[styles.createAnAccount, styles.password5Typo]}>
        Create an account with:
      </Text>
      <Pressable
        style={[styles.password4, styles.passwordPosition]}
        onPress={() => navigation.navigate("InterestsSetup")}
      >
        <View style={[styles.passwordItem, styles.passwordPosition]} />
        <Text style={[styles.password5, styles.password5Typo]}>Continue</Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={styles.login3Inner}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  passwordLayout: {
    height: 68,
    width: 327,
    left: "50%",
    top: "50%",
  },
  passwordPosition1: {
    opacity: 0.4,
    left: "50%",
    top: "50%",
  },
  login3Layout: {
    height: 100,
    width: 100,
    top: 495,
    position: "absolute",
  },
  password5Typo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  passwordPosition: {
    height: 52,
    marginLeft: -163.5,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  password: {
    marginTop: -266,
    marginLeft: -161.5,
    height: 68,
    width: 327,
    left: "50%",
    top: "50%",
  },
  passwordChild: {
    marginTop: -83,
    marginLeft: -162.5,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  password2: {
    marginTop: -62.1,
    marginLeft: -146.5,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  password3: {
    marginTop: 15,
    marginLeft: -164.5,
    height: 68,
    width: 327,
    left: "50%",
    top: "50%",
  },
  password1: {
    marginTop: -170,
    width: 329,
    height: 166,
    marginLeft: -163.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  login3Child: {
    left: 54,
  },
  login3Item: {
    left: 226,
  },
  createAnAccount: {
    top: 445,
    left: 70,
    fontWeight: "500",
    fontFamily: FontFamily.title,
    color: Color.colorBlack,
  },
  passwordItem: {
    marginTop: -26,
    backgroundColor: Color.colorMediumpurple,
    borderRadius: Border.br_base,
  },
  password5: {
    marginTop: -10,
    marginLeft: -147.5,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: Color.colorGray,
    width: 286,
    opacity: 0.4,
    left: "50%",
    top: "50%",
  },
  password4: {
    marginTop: 233,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "8.99%",
    right: "80.53%",
    bottom: "89.29%",
    left: "17.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  login3Inner: {
    height: "3.94%",
    width: "8.8%",
    top: "7.88%",
    right: "76.8%",
    bottom: "88.18%",
    left: "14.4%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  login3: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login3;
