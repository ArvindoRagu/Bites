import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Modal1 from "../components/Modal1";
import WhatsNextModal from "../components/WhatsNextModal";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MainPage = () => {
  const navigation = useNavigation();
  const [top30Visible, setTop30Visible] = useState(false);
  const [settingsIconVisible, setSettingsIconVisible] = useState(false);

  const openTop30 = useCallback(() => {
    setTop30Visible(true);
  }, []);

  const closeTop30 = useCallback(() => {
    setTop30Visible(false);
  }, []);

  const openSettingsIcon = useCallback(() => {
    setSettingsIconVisible(true);
  }, []);

  const closeSettingsIcon = useCallback(() => {
    setSettingsIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.mainPage}>
        <Text
          style={[styles.heyRohan, styles.logOut1FlexBox]}
        >{`Hey, Rohan  `}</Text>
        <Pressable
          style={styles.logOut}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.logOut1, styles.logOut1FlexBox]}>Log Out</Text>
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
        </ScrollView>
        <View style={[styles.salavatYulaev, styles.salavatLayout]}>
          <Image
            style={[styles.salavatYulaev1, styles.childPosition1]}
            contentFit="cover"
            source={require("../assets/salavat-yulaev.png")}
          />
          <Text
            style={[styles.monumentToSalavat, styles.textClr]}
          >{`Monument to Salavat Yulaev `}</Text>
          <View style={styles.liked}>
            <View style={[styles.likedChild, styles.childPosition1]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </View>
          <View style={styles.rating}>
            <View style={[styles.ratingChild, styles.childPosition1]} />
            <Image
              style={[styles.rateIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rate.png")}
            />
            <Text style={[styles.text, styles.textClr]}>4,9</Text>
          </View>
        </View>
        <Pressable style={styles.settings} onPress={openSettingsIcon}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
        </Pressable>
        <View style={[styles.gastroParent, styles.categoriesPosition]}>
          <View style={[styles.gastro, styles.top30SpaceBlock]}>
            <View style={styles.top301}>
              <View style={[styles.foodChild, styles.childPosition]} />
            </View>
            <Text style={[styles.gastro1, styles.foodTypo]}>Medicine</Text>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/screenshot-20240224-at-515-1.png")}
          />
        </View>
        <View style={[styles.salavatYulaev2, styles.salavatLayout]}>
          <Image
            style={[styles.salavatYulaev1, styles.childPosition1]}
            contentFit="cover"
            source={require("../assets/salavat-yulaev.png")}
          />
          <Text
            style={[styles.monumentToSalavat, styles.textClr]}
          >{`Monument to Salavat Yulaev `}</Text>
          <View style={styles.liked}>
            <View style={[styles.likedChild, styles.childPosition1]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </View>
          <View style={styles.rating}>
            <View style={[styles.ratingChild, styles.childPosition1]} />
            <Image
              style={[styles.rateIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rate.png")}
            />
            <Text style={[styles.text, styles.textClr]}>4,9</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={top30Visible}>
        <View style={styles.top30Overlay}>
          <Pressable style={styles.top30Bg} onPress={closeTop30} />
          <Modal1 onClose={closeTop30} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={settingsIconVisible}>
        <View style={styles.settingsIconOverlay}>
          <Pressable
            style={styles.settingsIconBg}
            onPress={closeSettingsIcon}
          />
          <WhatsNextModal onClose={closeSettingsIcon} />
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
  logOut1FlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  searchLayout: {
    width: 327,
    height: 52,
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
  categoriesPosition: {
    top: 229,
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
  salavatLayout: {
    height: 280,
    width: 212,
    top: 601,
    position: "absolute",
  },
  childPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  heyRohan: {
    top: 50,
    left: 23,
    fontSize: FontSize.size_15xl,
    letterSpacing: -0.7,
    fontFamily: FontFamily.title,
    fontWeight: "500",
    position: "absolute",
  },
  logOut1: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    opacity: 0.5,
    fontFamily: FontFamily.text,
  },
  logOut: {
    left: 25,
    top: 98,
    position: "absolute",
  },
  searchBarChild: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 52,
    width: 327,
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
    top: 128,
    height: 52,
    left: 24,
    position: "absolute",
  },
  yourInterests: {
    top: 196,
    left: 24,
  },
  forYou: {
    top: 565,
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
  categories: {
    left: 21,
    width: "100%",
  },
  salavatYulaev1: {
    borderRadius: Border.br_9xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  monumentToSalavat: {
    width: "54.25%",
    top: "65.36%",
    fontSize: FontSize.size_base,
    left: "11.32%",
    fontFamily: FontFamily.title,
    fontWeight: "500",
  },
  likedChild: {
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    borderStyle: "solid",
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
    top: "17.39%",
    left: "45.28%",
    fontSize: FontSize.size_smi,
    opacity: 0.65,
    fontFamily: FontFamily.text,
  },
  rating: {
    height: "8.21%",
    width: "25%",
    top: "81.79%",
    right: "63.68%",
    bottom: "10%",
    left: "11.32%",
    position: "absolute",
  },
  salavatYulaev: {
    left: 27,
  },
  settingsIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  settingsIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  settings: {
    left: "86.13%",
    top: "7.14%",
    right: "7.47%",
    bottom: "89.9%",
    width: "6.4%",
    height: "2.96%",
    position: "absolute",
  },
  foodChild: {
    backgroundColor: "#296ce7",
  },
  gastro1: {
    color: "#3a3a3a",
  },
  gastro: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 10,
    left: 11,
    width: 30,
    height: 32,
    position: "absolute",
  },
  gastroParent: {
    left: 264,
    width: 131,
    height: 52,
  },
  salavatYulaev2: {
    left: 269,
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
