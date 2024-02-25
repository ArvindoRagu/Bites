import * as React from "react";
import { Pressable, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BookmarkedLikedArticles = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookmarkedlikedArticles}>
      <Pressable
        style={[styles.back, styles.likedLayout]}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.backChild} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <Image
        style={styles.screenshot20240222At411}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-411-1.png")}
      />
      <Image
        style={styles.screenshot20240222At4111}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-411-2.png")}
      />
      <View style={[styles.liked, styles.likedLayout]}>
        <View style={[styles.likedChild, styles.likedBorder]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <Image
        style={[
          styles.screenshot20240222At413,
          styles.screenshot20240222Position,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-413-1.png")}
      />
      <View style={[styles.liked1, styles.likedLayout]}>
        <View style={[styles.likedChild, styles.likedBorder]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <Image
        style={[
          styles.screenshot20240222At415,
          styles.screenshot20240222Position,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-415-1.png")}
      />
      <View style={[styles.liked2, styles.likedLayout]}>
        <View style={[styles.likedChild, styles.likedBorder]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={[styles.liked3, styles.likedLayout]}>
        <View style={[styles.likedChild, styles.likedBorder]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <Image
        style={[styles.screenshot20240222At417, styles.searchBarPosition]}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-417-1.png")}
      />
      <View style={[styles.liked4, styles.likedLayout]}>
        <View style={[styles.likedChild, styles.likedBorder]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={styles.home}>
        <View style={[styles.homeIndicator, styles.liked5Position]} />
      </View>
      <Image
        style={styles.screenshot20240222At420}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-420-1.png")}
      />
      <View style={[styles.liked5, styles.liked5Position]}>
        <Image
          style={styles.vectorIcon6}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <TextInput
        style={[styles.searchBar, styles.searchBarPosition]}
        placeholder="Revisit your favorites..."
        placeholderTextColor="#242424"
      />
      <Image
        style={styles.screenshot20240222At601}
        contentFit="cover"
        source={require("../assets/screenshot-20240222-at-601-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  likedLayout: {
    width: "8.53%",
    height: "3.94%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "28.13%",
    position: "absolute",
    overflow: "hidden",
  },
  likedBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
  },
  screenshot20240222Position: {
    left: 183,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  searchBarPosition: {
    left: 11,
    position: "absolute",
  },
  liked5Position: {
    left: "50%",
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "43.75%",
    width: "21.88%",
    right: "40.63%",
    bottom: "28.13%",
    left: "37.5%",
  },
  back: {
    top: "8.5%",
    right: "84%",
    bottom: "87.56%",
    left: "7.47%",
  },
  screenshot20240222At411: {
    left: 13,
    width: 157,
    height: 225,
    borderRadius: Border.br_5xs,
    top: 386,
    position: "absolute",
  },
  screenshot20240222At4111: {
    top: 628,
    left: 193,
    width: 165,
    height: 236,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  likedChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    position: "absolute",
    width: "100%",
  },
  vectorIcon1: {
    height: "50%",
    width: "56.25%",
    right: "21.88%",
    bottom: "21.88%",
    left: "21.88%",
  },
  liked: {
    top: "46.06%",
    right: "51.47%",
    bottom: "50%",
    left: "40%",
  },
  screenshot20240222At413: {
    width: 174,
    height: 120,
    top: 386,
  },
  liked1: {
    top: "46.18%",
    right: "3.2%",
    bottom: "49.88%",
    left: "88.27%",
  },
  screenshot20240222At415: {
    top: 526,
    width: 175,
    height: 90,
  },
  liked2: {
    top: "63.79%",
    right: "1.33%",
    bottom: "32.27%",
    left: "90.13%",
  },
  liked3: {
    top: "76.11%",
    right: "0.8%",
    bottom: "19.95%",
    left: "90.67%",
  },
  screenshot20240222At417: {
    top: 624,
    width: 172,
    height: 188,
    borderRadius: Border.br_5xs,
  },
  liked4: {
    top: "75.99%",
    right: "49.07%",
    bottom: "20.07%",
    left: "42.4%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray,
    width: 134,
    height: 5,
  },
  home: {
    top: 775,
    left: 3,
    width: 375,
    height: 27,
    position: "absolute",
  },
  screenshot20240222At420: {
    top: 163,
    left: 129,
    width: 95,
    height: 87,
    position: "absolute",
  },
  vectorIcon6: {
    width: 18,
    height: 16,
  },
  liked5: {
    height: "3.69%",
    marginLeft: 4.5,
    top: "26.35%",
    bottom: "69.95%",
    padding: 7,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
  },
  searchBar: {
    top: 270,
    width: 345,
    height: 52,
    fontFamily: FontFamily.text,
    fontSize: FontSize.text_size,
  },
  screenshot20240222At601: {
    top: 283,
    left: 314,
    width: 32,
    height: 25,
    position: "absolute",
  },
  bookmarkedlikedArticles: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default BookmarkedLikedArticles;
