import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login1}>
      <Pressable
        style={styles.iHaveAnContainer}
        onPress={() => navigation.navigate("Login2")}
      >
        <Text style={[styles.iHaveAnAccount, styles.iHaveAnAccountTypo]}>
          I have an account.
        </Text>
      </Pressable>
      <View style={styles.frame}>
        <Pressable
          style={[styles.password, styles.passwordPosition]}
          onPress={() => navigation.navigate("Login11")}
        >
          <View style={[styles.passwordChild, styles.passwordPosition]} />
          <Text style={styles.password1}>Get Started</Text>
        </Pressable>
        <Text style={[styles.kickstartYourDay, styles.iHaveAnAccountTypo]}>
          Kickstart your day.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iHaveAnAccountTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikSemiBold,
    fontWeight: "600",
  },
  passwordPosition: {
    height: 52,
    marginLeft: -163.5,
    left: "50%",
    top: "50%",
    width: 327,
    position: "absolute",
  },
  iHaveAnAccount: {
    fontSize: FontSize.size_mini,
    width: 182,
    lineHeight: 20,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikSemiBold,
    fontWeight: "600",
  },
  iHaveAnContainer: {
    left: 98,
    top: 668,
    position: "absolute",
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
    marginTop: 202,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  kickstartYourDay: {
    top: 254,
    left: 0,
    fontSize: FontSize.size_11xl,
    lineHeight: 30,
    width: 319,
    position: "absolute",
  },
  frame: {
    top: 140,
    left: 26,
    height: 508,
    width: 327,
    position: "absolute",
    overflow: "hidden",
  },
  login1: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
