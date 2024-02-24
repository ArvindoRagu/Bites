import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={[styles.login1, styles.login1Layout]}>
      <Image
        style={styles.login1Child}
        contentFit="cover"
        source={require("../assets/ellipse-104.png")}
      />
      <View style={styles.statusbar}>
        <View style={[styles.iphoneXOrNewer, styles.login1Layout]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Image
              style={[styles.recordingIndicatorIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={styles.leftSideIcon}
            contentFit="cover"
            source={require("../assets/left-side.png")}
          />
        </View>
      </View>
      <Text style={[styles.iHaveAn, styles.iHaveAnTypo]}>
        I have an account.
      </Text>
      <Text style={[styles.kickstartYourDay, styles.iHaveAnTypo]}>
        Kickstart your day.
      </Text>
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Text style={styles.password1}>Get Started</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login1Layout: {
    width: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  iHaveAnTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  passwordPosition: {
    height: 52,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  login1Child: {
    top: 141,
    left: 87,
    width: 200,
    height: 200,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    top: 0,
    right: 0,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  statusbar: {
    top: 13,
    left: -7,
    width: 375,
    height: 44,
    position: "absolute",
  },
  iHaveAn: {
    top: 688,
    left: 98,
    fontSize: 15,
    width: 182,
    lineHeight: 20,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikSemiBold,
    fontWeight: "600",
  },
  kickstartYourDay: {
    top: 473,
    left: 28,
    fontSize: 30,
    lineHeight: 30,
    width: 319,
  },
  passwordChild: {
    marginTop: -26,
    marginLeft: -163.5,
    borderRadius: 16,
    backgroundColor: "#ae79e2",
  },
  password1: {
    marginTop: -10,
    marginLeft: -147.5,
    fontSize: 20,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: "#242424",
    width: 286,
    opacity: 0.4,
    left: "50%",
    top: "50%",
    textAlign: "center",
    lineHeight: 20,
    position: "absolute",
  },
  password: {
    marginTop: 210,
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
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
