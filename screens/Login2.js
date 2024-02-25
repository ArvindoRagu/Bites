import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Login2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login4}>
      <View style={[styles.password, styles.passwordPosition2]}>
        <View style={[styles.passwordChild, styles.passwordLayout]} />
        <TextInput
          style={[styles.password1, styles.passwordPosition1]}
          placeholder="Username"
          placeholderTextColor="#242424"
        />
        <TextInput
          style={[styles.password2, styles.passwordPosition1]}
          placeholder="Password"
          placeholderTextColor="#242424"
        />
      </View>
      <Pressable
        style={styles.iForgotMyContainer}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={[styles.iForgotMyPassword, styles.passwordTypo]}>
          I forgot my password.
        </Text>
      </Pressable>
      <Pressable
        style={[styles.password3, styles.passwordPosition]}
        onPress={() => navigation.navigate("MainPage")}
      >
        <View style={[styles.passwordItem, styles.passwordPosition]} />
        <Text style={[styles.password4, styles.passwordTypo]}>Continue</Text>
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
  passwordPosition2: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
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
  passwordChild: {
    marginTop: -83,
    marginLeft: -162.5,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_base,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  password1: {
    marginTop: -62.1,
    marginLeft: -146.5,
    opacity: 0.4,
  },
  password2: {
    marginTop: 15,
    height: 68,
    width: 327,
    marginLeft: -164.5,
  },
  password: {
    marginTop: -152,
    width: 329,
    height: 166,
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
  passwordItem: {
    marginTop: -26,
    marginLeft: -163.5,
    backgroundColor: Color.colorMediumpurple,
    borderRadius: Border.br_base,
  },
  password4: {
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
  password3: {
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
