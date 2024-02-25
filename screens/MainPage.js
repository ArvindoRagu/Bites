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
import WhatsNextModal from "../components/WhatsNextModal";
import Modal1 from "../components/Modal1";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const MainPage = () => {
  const navigation = useNavigation();
  const [settingsIconVisible, setSettingsIconVisible] = useState(false);
  const [top30Visible, setTop30Visible] = useState(false);

  const openSettingsIcon = useCallback(() => {
    setSettingsIconVisible(true);
  }, []);

  const closeSettingsIcon = useCallback(() => {
    setSettingsIconVisible(false);
  }, []);

  const openTop30 = useCallback(() => {
    setTop30Visible(true);
  }, []);

  const closeTop30 = useCallback(() => {
    setTop30Visible(false);
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
        <View style={styles.searchBar}>
          <View style={styles.searchBarChild} />
          <Text style={styles.askAnything}>Ask anything...</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </View>
        <View style={styles.searchBar}>
          <View style={styles.searchBarChild} />
          <Text style={styles.askAnything}>Ask anything...</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </View>
        <Pressable
          style={styles.searchBar}
          onPress={() => navigation.navigate("Search11")}
        >
          <View style={styles.searchBarChild} />
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
        <Text style={[styles.forYou, styles.forYouPosition]}>For You</Text>
        <View style={[styles.salavatYulaev, styles.forYouPosition]}>
          <Image
            style={[styles.salavatYulaev1, styles.ratingChildPosition]}
            contentFit="cover"
            source={require("../assets/salavat-yulaev.png")}
          />
          <Text
            style={[styles.monumentToSalavat, styles.textClr]}
          >{`Monument to Salavat Yulaev `}</Text>
          <View style={styles.liked}>
            <View style={styles.likedChild} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </View>
          <View style={styles.rating}>
            <View style={[styles.ratingChild, styles.ratingChildPosition]} />
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
        <View style={styles.image10} />
        <Image
          style={styles.image11Icon}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        <ScrollView
          style={[styles.natureParent, styles.natureParentPosition]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.nature}>
            <Text style={[styles.entertainment, styles.financeTypo]}>
              Entertainment
            </Text>
          </View>
          <Pressable
            style={[styles.top30, styles.top30SpaceBlock]}
            onPress={openTop30}
          >
            <Text style={[styles.finance, styles.financeTypo]}>Finance</Text>
          </Pressable>
          <View style={[styles.nature1, styles.top30SpaceBlock]}>
            <Text style={[styles.scitech, styles.financeTypo]}>Sci/Tech</Text>
          </View>
          <View style={[styles.nature1, styles.top30SpaceBlock]}>
            <Text style={[styles.scitech, styles.financeTypo]}>Art/Lit</Text>
          </View>
          <View style={[styles.nature1, styles.top30SpaceBlock]}>
            <Text style={[styles.scitech, styles.financeTypo]}>Politics</Text>
          </View>
          <View style={[styles.nature1, styles.top30SpaceBlock]}>
            <Text style={[styles.scitech, styles.financeTypo]}>Lifestyle</Text>
          </View>
          <View style={[styles.nature1, styles.top30SpaceBlock]}>
            <Text style={[styles.scitech, styles.financeTypo]}>Other</Text>
          </View>
        </ScrollView>
      </View>

      <Modal animationType="fade" transparent visible={settingsIconVisible}>
        <View style={styles.settingsIconOverlay}>
          <Pressable
            style={styles.settingsIconBg}
            onPress={closeSettingsIcon}
          />
          <WhatsNextModal onClose={closeSettingsIcon} />
        </View>
      </Modal>

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
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logOut1FlexBox: {
    textAlign: "left",
    color: Color.colorGray,
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
  },
  forYouPosition: {
    left: 27,
    position: "absolute",
  },
  ratingChildPosition: {
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
  natureParentPosition: {
    left: 24,
    position: "absolute",
  },
  financeTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.rubikRegular,
  },
  top30SpaceBlock: {
    marginLeft: 10,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    borderColor: Color.colorMediumslateblue,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
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
    fontFamily: FontFamily.rubikRegular,
  },
  logOut: {
    left: 25,
    top: 98,
    position: "absolute",
  },
  searchBarChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.rubikRegular,
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
    width: 327,
    left: 24,
    position: "absolute",
  },
  yourInterests: {
    top: 196,
    left: 24,
    position: "absolute",
  },
  forYou: {
    top: 565,
    fontSize: FontSize.title_size,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.title,
    fontWeight: "500",
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    position: "absolute",
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
    fontFamily: FontFamily.rubikRegular,
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
    top: 601,
    width: 212,
    height: 280,
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
  image10: {
    top: 659,
    left: -17,
    width: 608,
    height: 342,
    position: "absolute",
  },
  image11Icon: {
    top: 600,
    left: 261,
    borderRadius: 41,
    width: 261,
    height: 240,
    position: "absolute",
  },
  entertainment: {
    width: 109,
    color: Color.colorGray_300,
    textAlign: "center",
  },
  nature: {
    width: 125,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    borderColor: Color.colorMediumslateblue,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
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
  finance: {
    color: Color.colorBlack,
    width: 71,
  },
  top30: {
    width: 86,
  },
  scitech: {
    width: 70,
    color: Color.colorGray_300,
    textAlign: "center",
  },
  nature1: {
    width: 85,
  },
  natureParent: {
    top: 233,
    width: "100%",
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
