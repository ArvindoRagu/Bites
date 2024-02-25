import * as React from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ViewFullPageButtonFromMa111111111 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewFullPageButtonFromMa}>
      <Text style={[styles.finance, styles.minTypo1]}>Finance</Text>
      <Pressable style={styles.searchBar}>
        <Text style={styles.askAQuestion}>Ask a question</Text>
        <Image
          style={[styles.searchIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
      </Pressable>
      <Text
        style={[styles.financialInfoTailored, styles.rectangleIconPosition]}
      >
        Financial info, tailored just for you...
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
      <Text style={[styles.forYou, styles.popularClr]}>For You</Text>
      <Text style={[styles.popular, styles.popularClr]}>Popular</Text>
      <Text style={[styles.news, styles.popularClr]}>News</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
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
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/rectangle-50.png")}
        />
      </Pressable>
      <Text style={[styles.personalize, styles.popularClr]}>Personalize</Text>
      <Pressable style={styles.container} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/rectangle-56.png")}
        />
      </Pressable>
      <Text style={[styles.sources, styles.popularClr]}>Sources</Text>
      <Pressable
        style={[styles.bookmarkLight, styles.bookmarkLightLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout2}
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
        <Text style={[styles.listen, styles.popularClr]}>Listen</Text>
        <Pressable style={styles.bookmarkLight1} onPress={() => {}}>
          <Image
            style={[styles.icon3, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/bookmark-light.png")}
          />
        </Pressable>
        <Text style={[styles.min, styles.minPosition]}>10 min</Text>
        <Image
          style={[styles.image12Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-121.png")}
        />
      </View>
      <ScrollView
        style={[styles.groupParent, styles.component1Position]}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.component1Parent}>
          <View style={[styles.component1, styles.component1Position]}>
            <View style={styles.meetRddtPopularSocialPlatParent}>
              <Text
                style={[styles.meetRddtPopular, styles.nearly30WomenTypo]}
              >{`Meet RDDT: Popular social platform Reddit to sell stock in an unusual IPO
`}</Text>
              <Text
                style={[styles.sourceGradeUnbiased, styles.sourceTypo]}
              >{`Source Grade: Unbiased 
Complexity: Low
Released: This Morning
Time to read: 5 mins 
`}</Text>
              <Pressable
                style={[styles.bookmarkLight2, styles.iconPosition1]}
                onPress={() => {}}
              >
                <Image
                  style={[styles.icon3, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/bookmark-light2.png")}
                />
              </Pressable>
              <Image
                style={[styles.frameChild, styles.frameChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-681.png")}
              />
              <Text style={[styles.bobbyAllyn, styles.frameChildPosition]}>
                Bobby Allyn
              </Text>
            </View>
          </View>
          <Image
            style={styles.image13Icon}
            contentFit="cover"
            source={require("../assets/image-13.png")}
          />
        </View>
        <View style={styles.nearly30WomenAreSuingOlapParent}>
          <Text
            style={[styles.nearly30Women, styles.nearly30WomenLayout]}
          >{`Nearly 30 women are suing Olaplex, alleging products caused hair loss

`}</Text>
          <Text
            style={[styles.sourceGradeUnbiased1, styles.nearly30WomenLayout]}
          >{`Source Grade: Unbiased 
Complexity: Low
Released: This Morning
Time to read: 15 mins 
`}</Text>
          <Image
            style={[styles.componentItem, styles.anonymousPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-69.png")}
          />
          <Text style={[styles.anonymous, styles.anonymousPosition]}>
            Anonymous
          </Text>
          <Pressable style={styles.bookmarkLight3} onPress={() => {}}>
            <Image
              style={[styles.icon3, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/bookmark-light3.png")}
            />
          </Pressable>
          <Image
            style={[styles.image15Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
        <View style={styles.groupWrapper}>
          <View style={[styles.howWasTodaysPageParent, styles.iconPosition1]}>
            <Text
              style={[styles.howWasTodays, styles.iconPosition1]}
            >{`How Was Today’s Page? `}</Text>
            <Image
              style={[styles.image6Icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  minTypo1: {
    fontFamily: FontFamily.title,
    fontWeight: "500",
    color: Color.colorGray,
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleIconPosition: {
    top: 189,
    position: "absolute",
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
  popularClr: {
    color: Color.colorBlack,
    letterSpacing: -0.3,
    textAlign: "left",
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
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  minPosition: {
    left: "31.88%",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition1: {
    left: "0%",
    position: "absolute",
  },
  component1Position: {
    left: 0,
    position: "absolute",
  },
  nearly30WomenTypo: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  sourceTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
  },
  frameChildPosition: {
    top: "2.59%",
    position: "absolute",
  },
  nearly30WomenLayout: {
    width: "46.15%",
    color: Color.colorBlack,
    letterSpacing: -0.3,
    textAlign: "left",
    position: "absolute",
  },
  anonymousPosition: {
    top: "4.1%",
    position: "absolute",
  },
  finance: {
    top: 58,
    width: 141,
    height: 45,
    textAlign: "left",
    color: Color.colorGray,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    left: 33,
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
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  searchIcon: {
    height: "35.19%",
    width: "6.3%",
    top: "7.31%",
    right: "1.99%",
    bottom: "57.5%",
    left: "91.71%",
    opacity: 0.3,
    position: "absolute",
  },
  searchBar: {
    top: 126,
    width: 327,
    height: 52,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    left: 31,
    position: "absolute",
  },
  financialInfoTailored: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    opacity: 0.5,
    fontFamily: FontFamily.text,
    textAlign: "left",
    color: Color.colorGray,
    left: 33,
  },
  viewFullPageButtonFromMaChild: {
    width: 91,
    borderWidth: 0.2,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorBlack,
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
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    top: 223,
    color: Color.colorBlack,
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  popular: {
    left: 163,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    top: 223,
    color: Color.colorBlack,
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  news: {
    left: 291,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    top: 223,
    color: Color.colorBlack,
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  rectangleIcon: {
    left: 62,
    width: 100,
    height: 100,
  },
  todaysHighlights: {
    top: 263,
    width: 220,
    height: 56,
    left: 31,
  },
  dowJonesNasdaq: {
    top: 307,
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
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  container: {
    left: 26,
    top: 439,
    width: 98,
    height: 23,
    position: "absolute",
  },
  sources: {
    top: 442,
    left: 48,
    width: 54,
    height: 18,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  bookmarkLight: {
    left: 146,
    top: 438,
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
    height: "52.48%",
    width: "24.8%",
    top: "81.19%",
    left: "81.74%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    fontFamily: FontFamily.text,
    position: "absolute",
  },
  icon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bookmarkLight1: {
    left: "89.1%",
    top: "2.97%",
    right: "4.36%",
    bottom: "73.27%",
    width: "6.54%",
    height: "23.76%",
    position: "absolute",
  },
  min: {
    height: "16.83%",
    width: "11.72%",
    top: "80.2%",
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  image12Icon: {
    height: "97.03%",
    width: "28.34%",
    right: "71.66%",
    bottom: "2.97%",
    borderRadius: Border.br_6xl,
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  dailyInfocastParent: {
    top: 484,
    left: 20,
    width: 367,
    height: 101,
    position: "absolute",
  },
  meetRddtPopular: {
    height: "48.7%",
    width: "95.9%",
    top: "16.06%",
    left: "0.59%",
    color: Color.colorBlack,
    letterSpacing: -0.3,
    textAlign: "left",
    position: "absolute",
  },
  sourceGradeUnbiased: {
    height: "37.31%",
    width: "98.22%",
    top: "62.69%",
    left: "1.78%",
    color: Color.colorBlack,
    letterSpacing: -0.3,
    textAlign: "left",
    position: "absolute",
  },
  bookmarkLight2: {
    right: "85.97%",
    bottom: "87.56%",
    width: "14.03%",
    height: "12.44%",
    top: "0%",
  },
  frameChild: {
    height: "7.25%",
    width: "8.2%",
    right: "71.34%",
    bottom: "90.16%",
    left: "20.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bobbyAllyn: {
    width: "41.62%",
    left: "33.89%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    color: Color.colorBlack,
    letterSpacing: -0.3,
    textAlign: "left",
  },
  meetRddtPopularSocialPlatParent: {
    width: 168,
    height: 193,
  },
  component1: {
    top: 0,
    justifyContent: "center",
    width: 358,
  },
  image13Icon: {
    top: 5,
    left: 175,
    borderRadius: 17,
    width: 176,
    height: 173,
    position: "absolute",
  },
  component1Parent: {
    height: 193,
    width: 358,
  },
  nearly30Women: {
    height: "22.87%",
    top: "13.65%",
    left: "52.75%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  sourceGradeUnbiased1: {
    height: "24.57%",
    top: "43.69%",
    left: "51.37%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
  },
  componentItem: {
    height: "4.78%",
    width: "3.85%",
    right: "34.34%",
    bottom: "91.13%",
    left: "61.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  anonymous: {
    left: "67.31%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    color: Color.colorBlack,
    letterSpacing: -0.3,
    textAlign: "left",
  },
  bookmarkLight3: {
    left: "51.92%",
    top: "2.73%",
    right: "41.48%",
    bottom: "89.08%",
    width: "6.59%",
    height: "8.19%",
    position: "absolute",
  },
  image15Icon: {
    height: "59.39%",
    width: "48.08%",
    top: "3.75%",
    right: "51.92%",
    bottom: "36.86%",
    borderRadius: Border.br_lg,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  nearly30WomenAreSuingOlapParent: {
    width: 364,
    height: 293,
    marginLeft: 15,
  },
  howWasTodays: {
    textAlign: "center",
    top: "0%",
    fontFamily: FontFamily.text,
    color: Color.colorGray,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    width: "100%",
  },
  image6Icon: {
    height: "27.56%",
    width: "59.01%",
    top: "72.44%",
    right: "20.5%",
    left: "20.5%",
    bottom: "0%",
    position: "absolute",
  },
  howWasTodaysPageParent: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupWrapper: {
    width: 322,
    height: 156,
    marginLeft: 15,
  },
  groupParent: {
    top: 610,
    height: 202,
    maxHeight: 202,
    width: "100%",
  },
  lineView: {
    top: 599,
    left: 8,
    borderTopWidth: 1,
    width: 394,
    height: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  viewFullPageButtonFromMa: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewFullPageButtonFromMa111111111;
