import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const ViewFullPageButtonFromMa = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewFullPageButtonFromMa}>
      <Text style={[styles.stocks, styles.stocksFlexBox]}>Stocks</Text>
      <Text style={[styles.beHonestYou, styles.image6IconLayout]}>
        (Be honest, you won’t hurt our feelings)
      </Text>
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate("Search")}
      >
        <View style={styles.searchBarChild} />
        <Text style={[styles.askAQuestion, styles.stocksFlexBox]}>
          Ask a question
        </Text>
        <Image
          style={[styles.searchIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Text style={[styles.financialInfoPersonalized, styles.stocksFlexBox]}>
        Financial info, personalized just for you...
      </Text>
      <Pressable
        style={[
          styles.viewFullPageButtonFromMaChild,
          styles.bookmarkLightLayout,
        ]}
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
      <Text
        style={[styles.dowJonesNasdaq, styles.dowJonesNasdaqTypo]}
      >{`Dow Jones, NASDAQ, and S&P 500 saw gains of 1.18%, 2.96%, and 2.11%, respectively.
Nvidia's earnings beat sparked a rally, particularly boosting tech stocks. 
Minor fluctuations in commodities like Brent Crude and Gold, and currencies like EUR/USD and GBP/USD

`}</Text>
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
      <Text style={[styles.personalize, styles.listenClr]}>Personalize</Text>
      <Pressable style={styles.container} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-56.png")}
        />
      </Pressable>
      <Text style={[styles.sources, styles.listenClr]}>Sources</Text>
      <Pressable
        style={[styles.bookmarkLight, styles.bookmarkLightLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/bookmark-light.png")}
        />
      </Pressable>
      <View style={styles.dailyInfocastParent}>
        <Text style={[styles.dailyInfocast, styles.dailyInfocastTypo]}>
          Daily Infocast
        </Text>
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
        <Image
          style={[styles.componentChild, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-57.png")}
        />
        <Text style={[styles.listen, styles.listenClr]}>Listen</Text>
        <Pressable
          style={[styles.bookmarkLight1, styles.bookmarkLight1Position]}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-light.png")}
          />
        </Pressable>
        <Image
          style={[styles.shulgaTashCave, styles.bookmarkLight1Position]}
          contentFit="cover"
          source={require("../assets/shulgatash-cave.png")}
        />
        <Text style={[styles.min, styles.minPosition]}>10 min</Text>
      </View>
      <View style={styles.component1}>
        <View style={[styles.component1Inner, styles.component1InnerPosition]}>
          <View
            style={[styles.component1Inner, styles.component1InnerPosition]}
          >
            <Text
              style={[styles.meetRddtPopular, styles.listenClr]}
            >{`Meet RDDT: Popular social platform Reddit to sell stock in an unusual IPO
`}</Text>
            <Text
              style={[styles.sourceGradeUnbiased, styles.authorTypo]}
            >{`Source Grade: Unbiased 
Complexity: Low
Released: This Morning
Time to read: 5 mins 
`}</Text>
            <Pressable style={styles.bookmarkLight2} onPress={() => {}}>
              <Image
                style={[styles.icon3, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/bookmark-light.png")}
              />
            </Pressable>
            <Image
              style={[styles.shulgaTashCave1, styles.component1InnerPosition]}
              contentFit="cover"
              source={require("../assets/shulgatashcave.png")}
            />
            <Image
              style={[styles.groupChild, styles.authorPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-68.png")}
            />
            <Text style={[styles.authorAuthor, styles.authorPosition]}>
              Author Author
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.howWasTodaysPageParent, styles.howLayout]}>
        <Text
          style={[styles.howWasTodays, styles.howLayout]}
        >{`How Was Today’s Page? `}</Text>
        <Image
          style={[styles.image6Icon, styles.image6IconLayout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stocksFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  image6IconLayout: {
    width: 190,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bookmarkLightLayout: {
    height: 24,
    position: "absolute",
  },
  viewLayout: {
    width: 103,
    height: 24,
    top: 219,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  newsTypo: {
    top: 223,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.text,
    textAlign: "left",
    position: "absolute",
  },
  dailyInfocastTypo: {
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  listenClr: {
    color: Color.colorBlack,
    letterSpacing: -0.3,
    textAlign: "left",
    position: "absolute",
  },
  minPosition: {
    left: "31.88%",
    textAlign: "left",
    position: "absolute",
  },
  bookmarkLight1Position: {
    top: "2.97%",
    position: "absolute",
  },
  component1InnerPosition: {
    right: "0%",
    position: "absolute",
  },
  authorTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    letterSpacing: -0.3,
    color: Color.colorBlack,
    textAlign: "left",
  },
  authorPosition: {
    top: "2.59%",
    position: "absolute",
  },
  howLayout: {
    width: 322,
    position: "absolute",
  },
  stocks: {
    top: 58,
    width: 116,
    height: 45,
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    left: 33,
  },
  beHonestYou: {
    top: 1605,
    left: 110,
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.2,
    height: 27,
    textAlign: "center",
    width: 190,
    color: Color.colorBlack,
    fontFamily: FontFamily.text,
  },
  searchBarChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    left: 0,
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
    fontFamily: FontFamily.text,
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
    top: 126,
    height: 52,
    width: 327,
    left: 31,
    position: "absolute",
  },
  financialInfoPersonalized: {
    top: 189,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    opacity: 0.5,
    fontFamily: FontFamily.text,
    color: Color.colorGray,
    left: 33,
    textAlign: "left",
  },
  viewFullPageButtonFromMaChild: {
    borderColor: Color.colorBlack,
    width: 91,
    borderWidth: 0.2,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    top: 219,
    height: 24,
    borderRadius: Border.br_base,
    left: 33,
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
    top: 192,
    left: 62,
    width: 100,
    height: 100,
    position: "absolute",
  },
  todaysHighlights: {
    top: 266,
    width: 220,
    height: 56,
    left: 31,
  },
  dowJonesNasdaq: {
    top: 310,
    width: 338,
    height: 155,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    left: 31,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_2xs,
  },
  wrapper: {
    left: 239,
    top: 64,
    width: 130,
    height: 32,
    position: "absolute",
  },
  personalize: {
    top: 72,
    left: 268,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    fontFamily: FontFamily.text,
  },
  container: {
    left: 26,
    top: 446,
    width: 98,
    height: 23,
    position: "absolute",
  },
  sources: {
    top: 449,
    left: 48,
    width: 55,
    height: 12,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    fontFamily: FontFamily.text,
  },
  bookmarkLight: {
    left: 146,
    top: 445,
    width: 24,
  },
  dailyInfocast: {
    height: "55.45%",
    width: "59.95%",
    left: "31.34%",
    top: "0%",
  },
  nvidiasExplosionThe: {
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
  },
  text: {
    fontSize: 3,
  },
  nvidiasExplosionTheContainer: {
    height: "37.62%",
    width: "68.12%",
    top: "36.63%",
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  componentChild: {
    height: "22.77%",
    width: "23.43%",
    top: "77.23%",
    right: "1.09%",
    left: "75.48%",
    bottom: "0%",
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  listen: {
    height: "11.88%",
    width: "14.99%",
    top: "81.19%",
    left: "81.74%",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    fontFamily: FontFamily.text,
  },
  icon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bookmarkLight1: {
    left: "89.1%",
    right: "4.36%",
    bottom: "73.27%",
    width: "6.54%",
    height: "23.76%",
  },
  shulgaTashCave: {
    height: "94.06%",
    width: "26.98%",
    right: "73.02%",
    bottom: "2.97%",
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_smi,
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  min: {
    top: "80.2%",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  dailyInfocastParent: {
    top: 526,
    left: 20,
    width: 367,
    height: 101,
    position: "absolute",
  },
  meetRddtPopular: {
    height: "48.7%",
    width: "45.05%",
    top: "16.06%",
    left: "0.27%",
    fontSize: FontSize.size_mid,
    letterSpacing: -0.3,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  sourceGradeUnbiased: {
    height: "37.31%",
    width: "46.15%",
    top: "62.69%",
    left: "0.82%",
    position: "absolute",
  },
  bookmarkLight2: {
    right: "93.41%",
    bottom: "87.56%",
    width: "6.59%",
    height: "12.44%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  shulgaTashCave1: {
    height: "93.26%",
    width: "50.27%",
    top: "4.15%",
    bottom: "2.59%",
    left: "49.73%",
    borderRadius: Border.br_smi,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    height: "7.25%",
    width: "3.85%",
    right: "86.54%",
    bottom: "90.16%",
    left: "9.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  authorAuthor: {
    left: "15.93%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    letterSpacing: -0.3,
    color: Color.colorBlack,
    textAlign: "left",
  },
  component1Inner: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  component1: {
    top: 677,
    left: 19,
    width: 364,
    height: 193,
    position: "absolute",
  },
  howWasTodays: {
    height: 93,
    left: 0,
    top: 0,
    width: 322,
    textAlign: "center",
    fontFamily: FontFamily.text,
    color: Color.colorGray,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
  },
  image6Icon: {
    top: 120,
    left: 66,
    height: 43,
  },
  howWasTodaysPageParent: {
    top: 1507,
    left: 44,
    height: 163,
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
