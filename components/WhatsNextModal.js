import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const WhatsNextModal = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.whatsNextModal, styles.whatsNextModalLayout]}>
      <View style={styles.whatsNextModalChild} />
      <Text
        style={[styles.whatsNextRohan, styles.viewProfile1FlexBox]}
      >{`What’s next, 
Rohan?`}</Text>
      <Pressable
        style={[styles.viewProfile, styles.rkalahastyPosition]}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={[styles.viewProfile1, styles.viewProfile1FlexBox]}>
          View profile
        </Text>
      </Pressable>
      <Text style={[styles.rkalahasty, styles.rkalahastyTypo]}>rkalahasty</Text>
      <Image
        style={[styles.screenshot20240222At546, styles.whatsNextModalLayout]}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-546-1.png")}
      />
      <Text style={[styles.history, styles.helpTypo]}>History</Text>
      <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
      <Text style={[styles.notifications, styles.logOut1Typo]}>
        Notifications
      </Text>
      <Text style={[styles.help, styles.helpTypo]}>Help</Text>
      <Pressable
        style={[styles.bookmarks, styles.helpPosition]}
        onPress={() => navigation.navigate("BookmarkedLikedArticles")}
      >
        <Text style={[styles.bookmarks1, styles.helpTypo]}>Bookmarks</Text>
      </Pressable>
      <Pressable
        style={[styles.logOut, styles.helpPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logOut1Typo}>Log out</Text>
      </Pressable>
      <Pressable
        style={[styles.myInterests, styles.helpPosition]}
        onPress={() => navigation.navigate("InterestManager")}
      >
        <Text style={[styles.myInterests1, styles.rkalahastyTypo]}>
          My Interests
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  whatsNextModalLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  viewProfile1FlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  rkalahastyPosition: {
    left: "35.13%",
    position: "absolute",
  },
  rkalahastyTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  helpTypo: {
    width: "45.33%",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  logOut1Typo: {
    height: "4.43%",
    width: "45.33%",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  helpPosition: {
    left: "11.9%",
    position: "absolute",
  },
  whatsNextModalChild: {
    height: "154.93%",
    width: "115.58%",
    top: "-26.85%",
    right: "7.93%",
    bottom: "-28.08%",
    left: "-23.51%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  whatsNextRohan: {
    height: "9.36%",
    top: "14.41%",
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.6,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    color: Color.colorGray,
    left: "11.9%",
    width: "53.54%",
    position: "absolute",
  },
  viewProfile1: {
    height: "2.09%",
    width: "30.31%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
  },
  viewProfile: {
    top: "32.88%",
  },
  rkalahasty: {
    height: "6.65%",
    top: "28.94%",
    left: "35.13%",
    position: "absolute",
    width: "53.54%",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
  },
  screenshot20240222At546: {
    height: "11.33%",
    width: "27.2%",
    top: "26.11%",
    right: "64.59%",
    bottom: "62.56%",
    left: "8.22%",
    overflow: "hidden",
    position: "absolute",
  },
  history: {
    top: "52.34%",
    height: "4.56%",
    width: "45.33%",
    left: "11.9%",
    position: "absolute",
  },
  privacy: {
    height: "4.31%",
    top: "58.37%",
    left: "11.9%",
    position: "absolute",
  },
  notifications: {
    top: "65.02%",
    left: "11.9%",
    position: "absolute",
  },
  help: {
    top: "70.94%",
    height: "4.56%",
    width: "45.33%",
    left: "11.9%",
    position: "absolute",
  },
  bookmarks1: {
    height: "4.56%",
    width: "45.33%",
  },
  bookmarks: {
    top: "45.94%",
  },
  logOut: {
    top: "76.97%",
  },
  myInterests1: {
    height: "5.05%",
    width: "50.42%",
  },
  myInterests: {
    top: "39.78%",
  },
  whatsNextModal: {
    width: 353,
    height: 812,
  },
});

export default WhatsNextModal;
