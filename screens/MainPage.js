import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal1 from "../components/Modal1";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MainPage = ({ onClose }) => {
  const [top30Visible, setTop30Visible] = useState(false);
  const navigation = useNavigation();

  const openTop30 = useCallback(() => {
    setTop30Visible(true);
  }, []);

  const closeTop30 = useCallback(() => {
    setTop30Visible(false);
  }, []);

  return (
    <>
      <View style={styles.mainPage}>
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
              style={[styles.leftSideIcon, styles.categoriesPosition]}
              contentFit="cover"
              source={require("../assets/left-side1.png")}
            />
          </View>
        </View>
        <Text
          style={[styles.heyRohan, styles.logOut1Clr]}
        >{`Hey, Rohan  `}</Text>
        <Pressable
          style={styles.logOut}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.logOut1, styles.logOut1Clr]}>Log Out</Text>
        </Pressable>
        <View style={[styles.searchBar, styles.searchLayout]}>
          <View style={[styles.searchBarChild, styles.childBg]} />
          <Text style={styles.askAnything}>Ask anything...</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </View>
        <View style={[styles.searchBar, styles.searchLayout]}>
          <View style={[styles.searchBarChild, styles.childBg]} />
          <Text style={styles.askAnything}>Ask anything...</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </View>
        <Pressable
          style={[styles.searchBar, styles.searchLayout]}
          onPress={() => navigation.navigate("Search")}
        >
          <View style={[styles.searchBarChild, styles.childBg]} />
          <Text style={styles.askAnything}>Ask anything...</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </Pressable>
        <Text style={[styles.yourInterests, styles.forYouTypo]}>
          Your Interests
        </Text>
        <Text style={[styles.forYou, styles.forYouTypo]}>For You</Text>
        <ScrollView
          style={[styles.categories, styles.categoriesPosition]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.categoriesScrollViewContent}
        >
          <Pressable
            style={[styles.top30, styles.top30SpaceBlock]}
            onPress={openTop30}
          >
            <View style={styles.top301}>
              <View style={[styles.top30Child, styles.childPosition]} />
              <Image
                style={[
                  styles.screenshot20240224At505,
                  styles.screenshot20240224Position,
                ]}
                contentFit="cover"
                source={require("../assets/screenshot-20240224-at-505-1.png")}
              />
              <Image
                style={[
                  styles.screenshot20240224At512,
                  styles.screenshot20240224Position1,
                ]}
                contentFit="cover"
                source={require("../assets/screenshot-20240224-at-512-1.png")}
              />
            </View>
            <Text style={[styles.stocks, styles.foodTypo]}>Stocks</Text>
          </Pressable>
          <View style={[styles.nature, styles.top30SpaceBlock]}>
            <View style={styles.top301}>
              <View style={[styles.natureChild, styles.childPosition]} />
              <Image
                style={[
                  styles.screenshot20240224At514,
                  styles.screenshot20240224Position,
                ]}
                contentFit="cover"
                source={require("../assets/screenshot-20240224-at-514-1.png")}
              />
            </View>
            <Text style={[styles.food, styles.foodTypo]}>Food</Text>
          </View>
          <View style={[styles.nature, styles.top30SpaceBlock]}>
            <View style={styles.top301}>
              <View style={[styles.foodChild, styles.childPosition]} />
            </View>
            <Text style={[styles.gastro1, styles.foodTypo]}>Medicine</Text>
          </View>
        </ScrollView>
        <View style={[styles.krasnyyKlyuch, styles.krasnyyKlyuchLayout]}>
          <Image
            style={[styles.krasnyyKlyuch1, styles.modalChildLayout]}
            contentFit="cover"
            source={require("../assets/krasnyy-klyuch.png")}
          />
          <Text style={[styles.krasnyyKlyuchSpring, styles.textPosition]}>
            Krasnyy klyuch spring
          </Text>
          <View style={styles.liked}>
            <View style={[styles.likedChild, styles.top30Border]} />
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
            style={[styles.krasnyyKlyuch1, styles.modalChildLayout]}
            contentFit="cover"
            source={require("../assets/salavat-yulaev.png")}
          />
          <Text
            style={[styles.monumentToSalavat, styles.textPosition]}
          >{`Monument to Salavat Yulaev `}</Text>
          <View style={styles.liked}>
            <View style={[styles.likedChild, styles.top30Border]} />
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
        <View style={[styles.home, styles.homeLayout]}>
          <View style={styles.homeIndicator} />
        </View>
        <Pressable
          style={styles.settings}
          onPress={() => navigation.navigate("SettingsButtonFromMainPage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
        </Pressable>
        <Image
          style={styles.screenshot20240224At515}
          contentFit="cover"
          source={require("../assets/screenshot-20240224-at-515-1.png")}
        />
        <View style={styles.modal}>
          <Image
            style={[styles.baseindicatorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/positiontop.png")}
          />
          <Image
            style={[styles.modalChild, styles.modalChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-46.png")}
          />
          <Text style={styles.highlights}>Highlights</Text>
          <Pressable
            style={[styles.wrapper, styles.wrapperPosition]}
            onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
          >
            <Image
              style={[styles.icon1, styles.icon1Layout]}
              contentFit="cover"
              source={require("../assets/rectangle-48.png")}
            />
          </Pressable>
          <Image
            style={[styles.modalItem, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/rectangle-49.png")}
          />
          <Pressable
            style={[styles.yourInfocast, styles.yourInfocastPosition]}
            onPress={() => navigation.navigate("YourInfocastPageFromMain")}
          >
            <Text style={styles.viewFullPageTypo}>Your Infocast</Text>
          </Pressable>
          <Text style={[styles.viewFullPage, styles.viewFullPageTypo]}>
            View Full Page
          </Text>
          <Text
            style={styles.dowJonesNasdaq}
          >{`Dow Jones, NASDAQ, and S&P 500 saw gains of 1.18%, 2.96%, and 2.11%, respectively.
Nvidia's earnings beat sparked a rally, particularly boosting tech stocks.
Minor fluctuations in commodities like Brent Crude and Gold, and currencies like EUR/USD and GBP/USD
`}</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={top30Visible}>
        <View style={styles.top30Overlay}>
          <Pressable style={styles.top30Bg} onPress={closeTop30} />
          <Modal1 onClose={closeTop30} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  categoriesScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  homeLayout: {
    width: 375,
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
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  categoriesPosition: {
    left: 21,
    position: "absolute",
  },
  logOut1Clr: {
    color: Color.colorGray,
    textAlign: "left",
  },
  searchLayout: {
    height: 52,
    width: 327,
  },
  childBg: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    position: "absolute",
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
  top30SpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  screenshot20240224Position: {
    left: "8.33%",
    right: "11.11%",
    width: "80.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  screenshot20240224Position1: {
    bottom: "8.33%",
    top: "11.11%",
    height: "80.56%",
  },
  foodTypo: {
    marginLeft: 8,
    lineHeight: 20,
    fontSize: FontSize.text_size,
    fontFamily: FontFamily.text,
    textAlign: "left",
  },
  krasnyyKlyuchLayout: {
    width: "56.53%",
    height: "34.48%",
    position: "absolute",
  },
  modalChildLayout: {
    borderRadius: Border.br_9xl,
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  textPosition: {
    color: Color.colorWhite,
    left: 24,
    textAlign: "left",
    position: "absolute",
  },
  top30Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  ratingLayout: {
    height: 23,
    width: 53,
    position: "absolute",
  },
  wrapperPosition: {
    height: "10.08%",
    bottom: "6.98%",
    top: "82.95%",
    position: "absolute",
  },
  icon1Layout: {
    borderRadius: Border.br_2xs,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  yourInfocastPosition: {
    top: "84.11%",
    position: "absolute",
  },
  viewFullPageTypo: {
    color: Color.colorMediumslateblue,
    lineHeight: 20,
    fontSize: FontSize.text_size,
    fontFamily: FontFamily.text,
    textAlign: "left",
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
    top: 0,
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
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    position: "absolute",
    overflow: "hidden",
  },
  statusbar: {
    left: -7,
    height: 44,
    top: 16,
    width: 375,
  },
  heyRohan: {
    top: 68,
    left: 23,
    fontSize: FontSize.size_15xl,
    letterSpacing: -0.7,
    textAlign: "left",
    fontFamily: FontFamily.title,
    fontWeight: "500",
    color: Color.colorGray,
    position: "absolute",
  },
  logOut1: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    opacity: 0.5,
    fontFamily: FontFamily.text,
    textAlign: "left",
  },
  logOut: {
    left: 25,
    top: 116,
    position: "absolute",
  },
  searchBarChild: {
    left: 0,
    height: 52,
    width: 327,
    top: 0,
  },
  askAnything: {
    width: 286,
    opacity: 0.4,
    lineHeight: 20,
    fontSize: FontSize.text_size,
    left: 16,
    fontFamily: FontFamily.text,
    textAlign: "left",
    color: Color.colorGray,
    top: 16,
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
    position: "absolute",
  },
  yourInterests: {
    top: 214,
    left: 24,
  },
  forYou: {
    top: 583,
    left: 27,
  },
  top30Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  top30Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  top30Child: {
    backgroundColor: Color.colorMediumslateblue,
  },
  screenshot20240224At505: {
    bottom: "8.33%",
    top: "11.11%",
    height: "80.56%",
  },
  screenshot20240224At512: {
    width: "88.89%",
    right: "5.56%",
    left: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  top301: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  stocks: {
    color: Color.colorBlack,
  },
  top30: {
    borderColor: Color.colorMediumslateblue,
    borderWidth: 1,
    borderStyle: "solid",
  },
  natureChild: {
    backgroundColor: "#81dee4",
  },
  screenshot20240224At514: {
    height: "88.89%",
    top: "5.56%",
    bottom: "5.56%",
  },
  food: {
    color: "rgba(0, 0, 0, 0.77)",
  },
  nature: {
    marginLeft: 12,
  },
  foodChild: {
    backgroundColor: "#296ce7",
  },
  gastro1: {
    color: "#3a3a3a",
  },
  categories: {
    top: 247,
    width: "100%",
  },
  krasnyyKlyuch1: {
    top: "0%",
    height: "100%",
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
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    position: "absolute",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
    top: 805,
    height: 13,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  settings: {
    left: "86.13%",
    top: "9.36%",
    right: "7.47%",
    bottom: "87.68%",
    width: "6.4%",
    height: "2.96%",
    position: "absolute",
  },
  screenshot20240224At515: {
    top: 257,
    left: 275,
    width: 30,
    height: 32,
    position: "absolute",
  },
  baseindicatorIcon: {
    height: "3.1%",
    width: "16.33%",
    right: "73.18%",
    bottom: "96.9%",
    left: "10.5%",
    top: "0%",
    position: "absolute",
  },
  modalChild: {
    height: "96.12%",
    top: "3.88%",
  },
  highlights: {
    top: "1.55%",
    left: "6.41%",
    fontSize: FontSize.size_xl,
    lineHeight: 80,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "51.02%",
    right: "9.91%",
    width: "39.07%",
  },
  modalItem: {
    width: "36.44%",
    right: "53.06%",
    height: "10.08%",
    bottom: "6.98%",
    top: "82.95%",
    position: "absolute",
    left: "10.5%",
  },
  yourInfocast: {
    left: "15.74%",
  },
  viewFullPage: {
    left: "55.98%",
    top: "84.11%",
    position: "absolute",
  },
  dowJonesNasdaq: {
    height: "53.49%",
    width: "93.29%",
    top: "25.97%",
    left: "2.33%",
    fontSize: FontSize.paragraphFontSizeSmRegular_size,
    letterSpacing: -0.3,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  modal: {
    top: 312,
    width: 343,
    height: 258,
    left: 16,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  mainPage: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default MainPage;
