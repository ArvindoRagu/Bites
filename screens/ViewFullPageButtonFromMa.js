import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ViewFullPageButtonFromMa = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewFullPageButtonFromMa}>
      <Text style={[styles.stocks, styles.stocksFlexBox]}>Stocks</Text>
      <Text
        style={[styles.howWasTodays, styles.beHonestYouTypo]}
      >{`How Was Today’s Page? `}</Text>
      <Text style={[styles.beHonestYou, styles.image6IconPosition]}>
        (Be honest, you won’t hurt our feelings)
      </Text>
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate("Search")}
      >
        <View style={styles.searchBarChild} />
        <Text style={[styles.askAQuestion, styles.personalizeTypo]}>
          Ask a question
        </Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Text style={[styles.financialInfoPersonalized, styles.personalizeTypo]}>
        Financial info, personalized just for you...
      </Text>
      <Pressable
        style={[styles.viewFullPageButtonFromMaChild, styles.viewBorder]}
        onPress={() => {}}
      />
      <Pressable
        style={[styles.viewFullPageButtonFromMaItem, styles.viewLayout]}
      />
      <Image
        style={[styles.viewFullPageButtonFromMaInner, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text style={[styles.forYou, styles.newsTypo]}>For You</Text>
      <Text style={[styles.popular, styles.newsTypo]}>Popular</Text>
      <Text style={[styles.news, styles.newsTypo]}>News</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Text
        style={[styles.todaysHighlights, styles.dailyInfocastTypo]}
      >{`Today’s Highlights `}</Text>
      <Text style={[styles.dailyInfocast, styles.dailyInfocastTypo]}>
        Daily Infocast
      </Text>
      <Text
        style={[styles.meetRddtPopular, styles.stocksFlexBox]}
      >{`Meet RDDT: Popular social platform Reddit to sell stock in an unusual IPO
`}</Text>
      <Text
        style={[styles.dowJonesNasdaq, styles.dowJonesNasdaqTypo]}
      >{`Dow Jones, NASDAQ, and S&P 500 saw gains of 1.18%, 2.96%, and 2.11%, respectively.
Nvidia's earnings beat sparked a rally, particularly boosting tech stocks. 
Minor fluctuations in commodities like Brent Crude and Gold, and currencies like EUR/USD and GBP/USD

`}</Text>
      <Text
        style={[styles.sourceGradeUnbiased, styles.authorTypo]}
      >{`Source Grade: Unbiased 
Complexity: Low
Released: This Morning
Time to read: 5 mins 
`}</Text>
      <Text style={[styles.nvidiasExplosionTheContainer, styles.minPosition]}>
        <Text
          style={styles.nvidiasExplosionThe}
        >{`Nvidia's explosion, the fed's riddle, and 
the commodity carousel...




`}</Text>
        <Text style={styles.text}>{`    
`}</Text>
        <Text style={styles.nvidiasExplosionThe}> </Text>
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("InterestPersonalizer")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-50.png")}
        />
      </Pressable>
      <Text style={[styles.personalize, styles.personalizeTypo]}>
        Personalize
      </Text>
      <Pressable
        style={[styles.container, styles.containerLayout]}
        onPress={() => {}}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-56.png")}
        />
      </Pressable>
      <Text style={[styles.sources, styles.listenTypo]}>Sources</Text>
      <Image
        style={[styles.viewFullPageButtonFromMaChild1, styles.containerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-57.png")}
      />
      <Text style={[styles.listen, styles.listenTypo]}>Listen</Text>
      <Pressable
        style={[styles.bookmarkLight, styles.bookmarkLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/bookmark-light.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.bookmarkLight1, styles.bookmarkLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/bookmark-light.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.bookmarkLight2, styles.bookmarkLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/bookmark-light.png")}
        />
      </Pressable>
      <Image
        style={[styles.shulgaTashCave, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/shulgatash-cave.png")}
      />
      <Text style={[styles.min, styles.minPosition]}>10 min</Text>
      <Image
        style={[styles.shulgaTashCave1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/shulgatashcave.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-68.png")}
      />
      <Text style={[styles.authorAuthor, styles.authorPosition1]}>
        Author Author
      </Text>
      <Pressable
        style={[styles.bookmarkLight3, styles.bookmarkLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/bookmark-light.png")}
        />
      </Pressable>
      <Image
        style={styles.bookmarkLightIcon}
        contentFit="cover"
        source={require("../assets/bookmark-light1.png")}
      />
      <Image
        style={[styles.viewFullPageButtonFromMaChild2, styles.authorPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-68.png")}
      />
      <Text style={[styles.authorAuthor1, styles.authorPosition]}>
        Author Author
      </Text>
      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.home, styles.homeLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.statusbar, styles.homeLayout]}>
        <View style={[styles.iphoneXOrNewer, styles.iconLayout]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.bookmarkLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  stocksFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  beHonestYouTypo: {
    textAlign: "center",
    fontFamily: FontFamily.text,
  },
  image6IconPosition: {
    width: 190,
    left: 110,
    position: "absolute",
  },
  personalizeTypo: {
    fontFamily: FontFamily.text,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewBorder: {
    borderWidth: 0.2,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
  },
  viewLayout: {
    width: 103,
    height: 24,
    top: 229,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  newsTypo: {
    top: 233,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.text,
    textAlign: "left",
    position: "absolute",
  },
  dailyInfocastTypo: {
    height: 56,
    width: 220,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.title,
    fontWeight: "500",
    position: "absolute",
  },
  dowJonesNasdaqTypo: {
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  authorTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    letterSpacing: -0.3,
    color: Color.colorBlack,
    textAlign: "left",
  },
  minPosition: {
    left: 137,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  containerLayout: {
    height: 23,
    position: "absolute",
  },
  listenTypo: {
    height: 12,
    width: 55,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.text,
    textAlign: "left",
    position: "absolute",
  },
  bookmarkLayout: {
    width: 24,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 14,
    width: 14,
  },
  authorPosition1: {
    top: 692,
    position: "absolute",
  },
  authorPosition: {
    top: 945,
    position: "absolute",
  },
  homeLayout: {
    width: 375,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  stocks: {
    top: 68,
    width: 116,
    height: 45,
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    left: 33,
  },
  howWasTodays: {
    top: 1507,
    left: 44,
    width: 322,
    height: 93,
    color: Color.colorGray,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  beHonestYou: {
    top: 1605,
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.2,
    height: 27,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.text,
  },
  searchBarChild: {
    left: 0,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    top: 0,
    height: 52,
    width: 327,
    position: "absolute",
  },
  askAQuestion: {
    top: 16,
    left: 16,
    fontSize: FontSize.text_size,
    lineHeight: 20,
    width: 286,
    opacity: 0.4,
    color: Color.colorGray,
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
    top: 136,
    height: 52,
    width: 327,
    left: 31,
    position: "absolute",
  },
  financialInfoPersonalized: {
    top: 199,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    opacity: 0.5,
    color: Color.colorGray,
    left: 33,
  },
  viewFullPageButtonFromMaChild: {
    borderColor: Color.colorBlack,
    width: 91,
    height: 24,
    top: 229,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    left: 33,
    position: "absolute",
  },
  viewFullPageButtonFromMaItem: {
    left: 136,
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0.2,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
  },
  viewFullPageButtonFromMaInner: {
    left: 257,
  },
  forYou: {
    left: 55,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  popular: {
    left: 163,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  news: {
    left: 291,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  rectangleIcon: {
    top: 202,
    left: 62,
    width: 100,
    height: 100,
    position: "absolute",
  },
  todaysHighlights: {
    top: 276,
    left: 31,
  },
  dailyInfocast: {
    top: 536,
    left: 135,
  },
  meetRddtPopular: {
    top: 718,
    left: 20,
    fontSize: FontSize.size_mid,
    width: 164,
    height: 94,
    letterSpacing: -0.3,
    color: Color.colorBlack,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  dowJonesNasdaq: {
    top: 320,
    width: 338,
    height: 155,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    left: 31,
    textAlign: "left",
    position: "absolute",
  },
  sourceGradeUnbiased: {
    top: 808,
    left: 22,
    width: 168,
    height: 72,
    position: "absolute",
  },
  nvidiasExplosionThe: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  text: {
    fontSize: 3,
  },
  nvidiasExplosionTheContainer: {
    top: 573,
    width: 250,
    height: 38,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  icon: {
    borderRadius: Border.br_2xs,
  },
  wrapper: {
    left: 239,
    top: 74,
    width: 130,
    height: 32,
    position: "absolute",
  },
  personalize: {
    top: 82,
    left: 268,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    color: Color.colorBlack,
  },
  container: {
    left: 26,
    top: 456,
    width: 98,
  },
  sources: {
    top: 459,
    left: 48,
  },
  viewFullPageButtonFromMaChild1: {
    top: 614,
    left: 297,
    width: 86,
    borderRadius: Border.br_2xs,
  },
  listen: {
    top: 618,
    left: 320,
  },
  bookmarkLight: {
    left: 146,
    top: 455,
    height: 24,
  },
  bookmarkLight1: {
    left: 19,
    top: 687,
    height: 24,
  },
  bookmarkLight2: {
    left: 347,
    top: 539,
    height: 24,
  },
  shulgaTashCave: {
    height: "5.51%",
    width: "24.87%",
    top: "31.25%",
    right: "70.1%",
    bottom: "63.25%",
    left: "5.03%",
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_smi,
    position: "absolute",
  },
  min: {
    top: 617,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  shulgaTashCave1: {
    height: "10.43%",
    width: "45.98%",
    top: "40.29%",
    right: "3.77%",
    bottom: "49.28%",
    left: "50.25%",
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  ellipseIcon: {
    left: 54,
    top: 692,
    position: "absolute",
  },
  authorAuthor: {
    left: 77,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    letterSpacing: -0.3,
    color: Color.colorBlack,
    textAlign: "left",
  },
  bookmarkLight3: {
    left: 217,
    top: 940,
    height: 24,
  },
  bookmarkLightIcon: {
    top: 1422,
    left: 334,
    width: 40,
    height: 37,
    position: "absolute",
  },
  viewFullPageButtonFromMaChild2: {
    left: 252,
    height: 14,
    width: 14,
  },
  authorAuthor1: {
    left: 275,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    letterSpacing: -0.3,
    color: Color.colorBlack,
    textAlign: "left",
  },
  image6Icon: {
    top: 1627,
    height: 43,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray,
    width: 134,
    height: 5,
    position: "absolute",
  },
  home: {
    top: 1689,
    left: 11,
    height: 27,
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
    height: 11,
    top: 0,
    width: 24,
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
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  statusbar: {
    top: 14,
    left: 2,
    height: 44,
  },
  viewFullPageButtonFromMa: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1725,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewFullPageButtonFromMa;
