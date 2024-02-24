import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login1}>
      <Image
        style={styles.login1Child}
        contentFit="cover"
        source={require("../assets/ellipse-104.png")}
      />
      <Pressable
        style={styles.iHaveAnContainer}
        onPress={() => navigation.navigate("Login2")}
      >
        <Text style={[styles.iHaveAnAccount, styles.iHaveAnAccountTypo]}>
          I have an account.
        </Text>
      </Pressable>
      <Text style={[styles.kickstartYourDay, styles.iHaveAnAccountTypo]}>
        Kickstart your day.
      </Text>
      <Pressable
        style={[styles.password, styles.passwordPosition]}
        onPress={() => navigation.navigate("Login1")}
      >
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Text style={styles.password1}>Get Started</Text>
      </Pressable>
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
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  login1Child: {
    top: 121,
    left: 87,
    width: 200,
    height: 200,
    position: "absolute",
  },
  iHaveAnAccount: {
    fontSize: 15,
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
  kickstartYourDay: {
    top: 453,
    left: 28,
    fontSize: 30,
    lineHeight: 30,
    width: 319,
    position: "absolute",
  },
  passwordChild: {
    marginTop: -26,
    marginLeft: -163.5,
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
    marginTop: 190,
    marginLeft: -161.5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
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
