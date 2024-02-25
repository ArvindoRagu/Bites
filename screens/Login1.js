import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login5}>
      <Text style={[styles.beforeYouContinue, styles.youFlexBox]}>
        Before you continue...
      </Text>
      <Pressable
        style={[styles.password, styles.passwordPosition]}
        onPress={() => navigation.navigate("Login3")}
      >
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Text style={styles.password1}>I agree</Text>
      </Pressable>
      <Text style={[styles.makeSureYouContainer, styles.youFlexBox]}>
        {`make sure you agree with our `}
        <Text style={styles.privacyPolicy}>privacy policy</Text>
        {` and `}
        <Text style={styles.privacyPolicy}>terms of service</Text>.
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={styles.login5Child}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  youFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 20,
    position: "absolute",
  },
  passwordPosition: {
    height: 52,
    width: 327,
    marginLeft: -163.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  beforeYouContinue: {
    top: 206,
    left: 71,
    fontSize: 22,
    fontWeight: "500",
    fontFamily: FontFamily.title,
  },
  passwordChild: {
    marginTop: -26,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorMediumpurple,
  },
  password1: {
    marginTop: -10,
    marginLeft: -147.5,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: Color.colorGray,
    width: 286,
    opacity: 0.4,
    left: "50%",
    top: "50%",
    textAlign: "center",
    lineHeight: 20,
    position: "absolute",
  },
  password: {
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
  privacyPolicy: {
    textDecoration: "underline",
  },
  makeSureYouContainer: {
    top: 248,
    left: 42,
    fontSize: FontSize.text_size,
    fontFamily: FontFamily.text,
    width: 292,
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "10.47%",
    right: "80.53%",
    bottom: "87.81%",
    left: "17.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  login5Child: {
    height: "3.94%",
    width: "8.8%",
    top: "9.36%",
    right: "76.8%",
    bottom: "86.7%",
    left: "14.4%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  login5: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login1;
