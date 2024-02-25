import * as React from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Login2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login4}>
      <View style={[styles.passwordParent, styles.passwordLayout]}>
        <TextInput
          style={[styles.password, styles.passwordPosition1]}
          placeholder="Enter Username"
          placeholderTextColor="#242424"
        />
        <View style={[styles.groupChild, styles.passwordLayout]} />
      </View>
      <TextInput
        style={[styles.password1, styles.passwordPosition1]}
        placeholder="Enter Password"
        placeholderTextColor="#242424"
      />
      <Pressable
        style={styles.iForgotMyContainer}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={[styles.iForgotMyPassword, styles.passwordTypo]}>
          I forgot my password.
        </Text>
      </Pressable>
      <Pressable
        style={[styles.password2, styles.passwordPosition]}
        onPress={() => navigation.navigate("MainPage")}
      >
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Text style={[styles.password3, styles.passwordTypo]}>Continue</Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={styles.login4Child}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordLayout: {
    height: 68,
    width: 327,
  },
  passwordPosition1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.rubikRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  passwordTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  passwordPosition: {
    height: 52,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  password: {
    marginTop: -13.1,
    marginLeft: -145.5,
    opacity: 0.4,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  passwordParent: {
    marginTop: -135,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginLeft: -164.5,
  },
  password1: {
    marginTop: -50,
    height: 68,
    width: 327,
    marginLeft: -164.5,
  },
  iForgotMyPassword: {
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 20,
  },
  iForgotMyContainer: {
    left: 84,
    top: 538,
    position: "absolute",
  },
  passwordChild: {
    marginTop: -26,
    marginLeft: -163.5,
    backgroundColor: Color.colorMediumpurple,
    borderRadius: Border.br_base,
  },
  password3: {
    marginTop: -10,
    marginLeft: -147.5,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: Color.colorGray,
    width: 286,
    opacity: 0.4,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  password2: {
    marginTop: 50,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginLeft: -164.5,
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "9.24%",
    right: "83.73%",
    bottom: "89.04%",
    left: "14.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  login4Child: {
    height: "3.94%",
    width: "8.8%",
    top: "8.13%",
    right: "80%",
    bottom: "87.93%",
    left: "11.2%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  login4: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login2;
