import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.forgotPassword1}>Forgot Password?</Text>
      <Pressable
        style={styles.forgotPasswordChild}
        onPress={() => navigation.goBack()}
      />
      <TextInput
        style={[styles.interest, styles.interestPosition]}
        placeholder="Email"
        placeholderTextColor="#242424"
      />
      <Pressable
        style={[styles.password, styles.passwordPosition]}
        onPress={() => navigation.navigate("Login3")}
      >
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Text style={[styles.password1, styles.interestPosition]}>
          Change Password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  interestPosition: {
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
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
  forgotPassword1: {
    top: 156,
    left: 28,
    fontSize: FontSize.size_11xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 319,
    position: "absolute",
  },
  forgotPasswordChild: {
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
  interest: {
    marginTop: -184,
    marginLeft: -161.5,
    height: 60,
    fontFamily: FontFamily.text,
    width: 327,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
  },
  passwordChild: {
    marginTop: -26,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorMediumpurple,
  },
  password1: {
    marginTop: -10,
    marginLeft: -147.5,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: Color.colorGray,
    textAlign: "center",
    width: 286,
    opacity: 0.4,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
  },
  password: {
    marginTop: -100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  forgotPassword: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ForgotPassword;
