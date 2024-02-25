import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Password = () => {
  return (
    <Pressable style={[styles.password, styles.passwordLayout]}>
      <View style={[styles.passwordChild, styles.passwordPosition]} />
      <Text style={[styles.password1, styles.passwordPosition]}>Continue</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  passwordLayout: {
    height: 52,
    width: 327,
  },
  passwordPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  passwordChild: {
    marginTop: -26,
    marginLeft: -163.5,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorMediumpurple,
    height: 52,
    width: 327,
  },
  password1: {
    marginTop: -10,
    marginLeft: -147.5,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: Color.colorGray,
    textAlign: "center",
    width: 286,
    opacity: 0.4,
  },
  password: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
});

export default Password;
