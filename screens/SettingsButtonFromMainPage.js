import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SettingsButtonFromMainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsButtonFromMainPage}>
      <Text
        style={[styles.heyRohan, styles.heyRohanFlexBox]}
      >{`Hey, Rohan  `}</Text>
      <Text style={[styles.logOut, styles.logOutPosition]}>Log Out</Text>
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.childBg]} />
        <Text style={styles.askAnything}>Ask anything...</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <Text style={[styles.interests, styles.forYouTypo]}>Interests</Text>
      <Text style={[styles.forYou, styles.forYouTypo]}>For You</Text>
      <View style={[styles.krasnyyKlyuch, styles.krasnyyKlyuchLayout]}>
        <Image
          style={[styles.krasnyyKlyuch1, styles.likedChildPosition]}
          contentFit="cover"
          source={require("../assets/krasnyy-klyuch.png")}
        />
        <Text style={[styles.krasnyyKlyuchSpring, styles.textPosition]}>
          Krasnyy klyuch spring
        </Text>
        <View style={styles.liked}>
          <View style={[styles.likedChild, styles.childBorder]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
        <View style={[styles.rating, styles.ratingLayout]}>
          <View style={[styles.ratingChild, styles.ratingLayout]} />
          <Image
            style={[styles.rateIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rate.png")}
          />
          <Text style={[styles.text, styles.textPosition]}>5,0</Text>
        </View>
      </View>
      <View style={[styles.salavatYulaev, styles.krasnyyKlyuchLayout]}>
        <Image
          style={[styles.krasnyyKlyuch1, styles.likedChildPosition]}
          contentFit="cover"
          source={require("../assets/salavat-yulaev.png")}
        />
        <Text
          style={[styles.monumentToSalavat, styles.textPosition]}
        >{`Monument to Salavat Yulaev `}</Text>
        <View style={styles.liked}>
          <View style={[styles.likedChild, styles.childBorder]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
        </View>
        <View style={[styles.rating, styles.ratingLayout]}>
          <View style={[styles.ratingChild, styles.ratingLayout]} />
          <Image
            style={[styles.rateIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rate.png")}
          />
          <Text style={[styles.text, styles.textPosition]}>4,9</Text>
        </View>
      </View>
      <Image
        style={styles.baseindicatorIcon}
        contentFit="cover"
        source={require("../assets/positiontop.png")}
      />
      <View
        style={[styles.settingsButtonFromMainPageChild, styles.childBorder]}
      />
      <Text
        style={[styles.description, styles.doUTypo]}
      >{`Nvidia Shares Jump on Upbeat Forecast
Japan's stock market passes record closing level after 34 years
S&P 500 futures rise in overnight trading, Nvidia shares jump: Live updates`}</Text>
      <Text style={styles.highlights}>Highlights</Text>
      <Image
        style={[styles.settingsButtonFromMainPageItem, styles.settingsLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-481.png")}
      />
      <Image
        style={[styles.settingsButtonFromMainPageInner, styles.settingsLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-491.png")}
      />
      <Text style={[styles.yourInfocast, styles.yourInfocastTypo]}>
        Your Infocast
      </Text>
      <Text style={[styles.viewFullPage, styles.yourInfocastTypo]}>
        View Full Page
      </Text>
      <View style={[styles.home, styles.homeLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={[styles.settingsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.viewProfile}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={[styles.viewProfile1, styles.heyRohanFlexBox]}>
          View profile
        </Text>
      </Pressable>
      <Text
        style={[styles.whatsNextRohan, styles.rkalahastyLayout]}
      >{`What’s next, 
Rohan?`}</Text>
      <Text style={[styles.history, styles.helpTypo]}>History</Text>
      <Text style={styles.privacy}>Privacy</Text>
      <Text style={[styles.notifications, styles.logOut2Typo]}>
        Notifications
      </Text>
      <Pressable
        style={styles.logOut1}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logOut2Typo}>Log out</Text>
      </Pressable>
      <Text style={[styles.help, styles.helpTypo]}>Help</Text>
      <Pressable
        style={styles.bookmarks}
        onPress={() => navigation.navigate("BookmarkedLikedArticles")}
      >
        <Text style={styles.helpTypo}>Bookmarks</Text>
      </Pressable>
      <Pressable
        style={styles.myInterests}
        onPress={() => navigation.navigate("InterestManager")}
      >
        <Text style={[styles.myInterests1, styles.rkalahastyTypo]}>
          My Interests
        </Text>
      </Pressable>
      <Text style={[styles.rkalahasty, styles.rkalahastyTypo]}>rkalahasty</Text>
      <Text style={[styles.doU, styles.doUTypo]}>{`Do u `}</Text>
      <Image
        style={styles.screenshot20240222At546}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-546-1.png")}
      />
      <View style={[styles.statusbar, styles.homeLayout]}>
        <View style={[styles.iphoneXOrNewer, styles.likedChildPosition]}>
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
            source={require("../assets/left-side1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heyRohanFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  logOutPosition: {
    top: 108,
    textAlign: "left",
    color: Color.colorGray,
  },
  searchLayout: {
    height: 52,
    width: 327,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  forYouTypo: {
    fontSize: FontSize.title_size,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    position: "absolute",
  },
  krasnyyKlyuchLayout: {
    width: "56.53%",
    height: "34.48%",
    position: "absolute",
  },
  likedChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  textPosition: {
    color: Color.colorWhite,
    textAlign: "left",
    left: 24,
    position: "absolute",
  },
  childBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  ratingLayout: {
    height: 23,
    width: 53,
    position: "absolute",
  },
  doUTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.paragraphFontSizeSmRegular,
    textAlign: "left",
    position: "absolute",
  },
  settingsLayout: {
    height: 26,
    borderRadius: Border.br_2xs,
    top: 526,
    position: "absolute",
  },
  yourInfocastTypo: {
    color: Color.colorMediumpurple,
    top: 529,
    lineHeight: 20,
    fontSize: FontSize.text_size,
    fontFamily: FontFamily.text,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    width: 375,
    position: "absolute",
  },
  rkalahastyLayout: {
    height: 54,
    width: 189,
    position: "absolute",
  },
  helpTypo: {
    height: 37,
    width: 160,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  logOut2Typo: {
    height: 36,
    width: 160,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  rkalahastyTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  heyRohan: {
    top: 60,
    fontSize: FontSize.size_15xl,
    letterSpacing: -0.7,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    left: 24,
    position: "absolute",
  },
  logOut: {
    letterSpacing: 0.1,
    opacity: 0.5,
    fontFamily: FontFamily.text,
    fontSize: FontSize.size_xs,
    left: 27,
    position: "absolute",
  },
  searchBarChild: {
    left: 0,
    top: 0,
    height: 52,
    width: 327,
    position: "absolute",
  },
  askAnything: {
    top: 16,
    left: 16,
    width: 286,
    opacity: 0.4,
    lineHeight: 20,
    fontSize: FontSize.text_size,
    fontFamily: FontFamily.text,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  searchIcon: {
    height: "38.46%",
    width: "6.12%",
    top: "30.77%",
    right: "4.89%",
    bottom: "30.77%",
    left: "88.99%",
    opacity: 0.3,
    position: "absolute",
  },
  searchBar: {
    top: 146,
    left: 24,
  },
  interests: {
    top: 214,
    left: 24,
  },
  forYou: {
    top: 583,
    left: 27,
  },
  krasnyyKlyuch1: {
    borderRadius: Border.br_9xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  krasnyyKlyuchSpring: {
    width: 129,
    fontSize: FontSize.size_base,
    top: 183,
    color: Color.colorWhite,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  likedChild: {
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
  },
  vectorIcon: {
    height: "50%",
    width: "56.25%",
    top: "28.13%",
    right: "21.88%",
    bottom: "21.88%",
    left: "21.88%",
    position: "absolute",
  },
  liked: {
    height: "11.43%",
    width: "15.09%",
    top: "5.71%",
    right: "7.55%",
    bottom: "82.86%",
    left: "77.36%",
    position: "absolute",
    overflow: "hidden",
  },
  ratingChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
  },
  rateIcon: {
    height: "56.52%",
    width: "24.53%",
    top: "21.74%",
    right: "62.26%",
    bottom: "21.74%",
    left: "13.21%",
    borderRadius: Border.br_12xs_4,
    position: "absolute",
  },
  text: {
    top: 4,
    fontSize: FontSize.size_smi,
    opacity: 0.65,
    fontFamily: FontFamily.text,
  },
  rating: {
    top: 229,
    left: 24,
  },
  krasnyyKlyuch: {
    top: "76.35%",
    right: "-23.47%",
    bottom: "-10.84%",
    left: "66.93%",
  },
  monumentToSalavat: {
    width: 115,
    fontSize: FontSize.size_base,
    top: 183,
    color: Color.colorWhite,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  salavatYulaev: {
    top: "76.23%",
    right: "36.27%",
    bottom: "-10.71%",
    left: "7.2%",
  },
  baseindicatorIcon: {
    top: 309,
    width: 56,
    height: 8,
    left: 52,
    position: "absolute",
  },
  settingsButtonFromMainPageChild: {
    top: 317,
    left: 26,
    borderColor: Color.colorBlack,
    borderWidth: 0.5,
    width: 330,
    height: 248,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
  },
  description: {
    top: 369,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    width: 281,
    left: 52,
    lineHeight: 20,
  },
  highlights: {
    left: 44,
    lineHeight: 80,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xl,
    top: 311,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  settingsButtonFromMainPageItem: {
    left: 204,
    width: 134,
  },
  settingsButtonFromMainPageInner: {
    left: 71,
    width: 125,
  },
  yourInfocast: {
    left: 89,
  },
  viewFullPage: {
    left: 222,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray,
    height: 5,
    width: 134,
    position: "absolute",
  },
  home: {
    top: 805,
    height: 13,
    left: 0,
  },
  settingsIcon: {
    height: "2.96%",
    width: "6.4%",
    top: "8.37%",
    right: "8.8%",
    bottom: "88.67%",
    left: "84.8%",
    position: "absolute",
  },
  rectangleView: {
    top: -1,
    left: 12,
    borderRadius: 52,
    backgroundColor: "#fffefe",
    width: 317,
    height: 952,
    position: "absolute",
  },
  viewProfile1: {
    letterSpacing: -0.3,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
    width: 107,
    height: 17,
    fontSize: FontSize.size_base,
  },
  viewProfile: {
    top: 254,
    left: 117,
    position: "absolute",
  },
  whatsNextRohan: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.6,
    left: 38,
    top: 108,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  history: {
    top: 397,
    left: 38,
    position: "absolute",
  },
  privacy: {
    top: 443,
    height: 35,
    width: 160,
    letterSpacing: -0.4,
    left: 38,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    position: "absolute",
  },
  notifications: {
    top: 490,
    left: 38,
    position: "absolute",
  },
  logOut1: {
    top: 578,
    left: 38,
    position: "absolute",
  },
  help: {
    top: 536,
    left: 38,
    position: "absolute",
  },
  bookmarks: {
    top: 354,
    left: 38,
    position: "absolute",
  },
  myInterests1: {
    width: 178,
    height: 68,
  },
  myInterests: {
    left: 38,
    top: 311,
    position: "absolute",
  },
  rkalahasty: {
    top: 222,
    height: 54,
    width: 189,
    position: "absolute",
    left: 117,
  },
  doU: {
    top: -122,
    left: -8,
    width: 350,
    fontSize: FontSize.size_xs,
  },
  screenshot20240222At546: {
    top: 199,
    left: 22,
    width: 96,
    height: 92,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
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
    position: "absolute",
    overflow: "hidden",
  },
  statusbar: {
    top: 21,
    left: -5,
    height: 44,
  },
  settingsButtonFromMainPage: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SettingsButtonFromMainPage;
