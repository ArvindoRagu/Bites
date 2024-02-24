import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Login2 = () => {
  return (
    <View style={styles.login4}>
      <View style={styles.password}>
        <View style={[styles.passwordChild, styles.passwordPosition2]} />
        <Text style={styles.password1}>Username/Email</Text>
        <View style={[styles.password2, styles.passwordPosition2]}>
          <View style={[styles.passwordItem, styles.passwordPosition2]} />
          <Text style={[styles.password3, styles.passwordPosition1]}>
            Password
          </Text>
        </View>
      </View>
      <Image
        style={[styles.login4Child, styles.login4Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-105.png")}
      />
      <Image
        style={[styles.login4Item, styles.login4Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-105.png")}
      />
      <Text style={[styles.signInWith, styles.iForgotMyTypo]}>
        sign in with:
      </Text>
      <Text style={[styles.iForgotMy, styles.iForgotMyTypo]}>
        I forgot my password.
      </Text>
      <View style={[styles.password4, styles.passwordPosition]}>
        <View style={[styles.passwordInner, styles.passwordPosition]} />
        <Text style={[styles.password5, styles.passwordPosition1]}>
          Continue
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordPosition2: {
    height: 68,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  passwordPosition1: {
    marginLeft: -147.5,
    opacity: 0.4,
    width: 286,
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  login4Layout: {
    height: 100,
    width: 100,
    top: 432,
    position: "absolute",
  },
  iForgotMyTypo: {
    color: Color.colorBlack,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  passwordPosition: {
    height: 52,
    width: 327,
    left: "50%",
    top: "50%",
    marginLeft: -163.5,
    position: "absolute",
  },
  passwordChild: {
    marginTop: -83,
    marginLeft: -162.5,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 327,
    borderRadius: Border.br_base,
  },
  password1: {
    marginTop: -62.1,
    marginLeft: -146.5,
    opacity: 0.4,
    width: 286,
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.rubikRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  passwordItem: {
    marginTop: -34,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 327,
    borderRadius: Border.br_base,
    marginLeft: -163.5,
  },
  password3: {
    marginTop: -13.1,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: -147.5,
    fontFamily: FontFamily.rubikRegular,
  },
  password2: {
    marginTop: 15,
    marginLeft: -164.5,
  },
  password: {
    marginTop: -233,
    width: 329,
    height: 166,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginLeft: -163.5,
  },
  login4Child: {
    left: 54,
  },
  login4Item: {
    left: 226,
  },
  signInWith: {
    top: 382,
    left: 127,
    fontWeight: "500",
    fontFamily: FontFamily.rubikMedium,
  },
  iForgotMy: {
    top: 658,
    left: 85,
    fontFamily: FontFamily.rubikRegular,
    color: Color.colorBlack,
  },
  passwordInner: {
    marginTop: -26,
    backgroundColor: Color.colorMediumpurple,
    borderRadius: Border.br_base,
    height: 52,
  },
  password5: {
    marginTop: -10,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
  },
  password4: {
    marginTop: 170,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
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
