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
      <View style={styles.myInterestsParent}>
        <Pressable onPress={() => navigation.navigate("InterestManager")}>
          <Text style={[styles.myInterests1, styles.rkalahastyTypo]}>
            My Interests
          </Text>
        </Pressable>
        <Pressable
          style={styles.bookmarks}
          onPress={() => navigation.navigate("BookmarkedLikedArticles")}
        >
          <Text style={styles.historyTypo}>Bookmarks</Text>
        </Pressable>
        <Text style={[styles.history, styles.historyTypo]}>History</Text>
        <Text style={styles.privacy}>Privacy</Text>
        <Text style={[styles.notifications, styles.logOut1Typo]}>
          Notifications
        </Text>
        <Text style={[styles.history, styles.historyTypo]}>Help</Text>
        <Pressable
          style={styles.bookmarks}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.logOut1Typo}>Log out</Text>
        </Pressable>
      </View>
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
  historyTypo: {
    height: 37,
    width: 160,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  logOut1Typo: {
    height: 36,
    width: 160,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
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
    left: "11.9%",
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.6,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    color: Color.colorGray,
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
  myInterests1: {
    width: 178,
    height: 41,
  },
  bookmarks: {
    marginTop: 15,
  },
  history: {
    marginTop: 15,
  },
  privacy: {
    height: 35,
    width: 160,
    marginTop: 15,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  notifications: {
    marginTop: 15,
  },
  myInterestsParent: {
    top: 323,
    left: 42,
    position: "absolute",
  },
  whatsNextModal: {
    width: 353,
    height: 812,
  },
});

export default WhatsNextModal;
