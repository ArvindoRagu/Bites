import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Login1 = () => {
  return (
    <View style={styles.login2}>
      <Text style={styles.whatsYourName}>What’s your name?</Text>
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Text style={styles.password1}>Enter Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordPosition: {
    height: 68,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  whatsYourName: {
    top: 148,
    left: 28,
    fontSize: 27,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.colorBlack,
    width: 319,
    textAlign: "center",
    position: "absolute",
  },
  passwordChild: {
    marginTop: -34,
    marginLeft: -163.5,
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  password1: {
    marginTop: -13.1,
    marginLeft: -147.5,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontFamily: FontFamily.rubikRegular,
    color: Color.colorGray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 286,
    height: 26,
    opacity: 0.4,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  password: {
    marginTop: -206,
    marginLeft: -161.5,
  },
  login2: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login1;
