import * as React from "react";
import { Pressable, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BookmarkedLikedArticles = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookmarkedlikedArticles}>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <View style={styles.backChild} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <View style={styles.component4}>
        <Image
          style={[
            styles.screenshot20240222At411,
            styles.screenshot20240222Layout,
          ]}
          contentFit="cover"
          source={require("../assets/screenshot-20240222-at-411-1.png")}
        />
        <View style={[styles.liked, styles.likedPosition1]}>
          <View style={[styles.likedChild, styles.likedBorder]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
      </View>
      <View style={[styles.component2, styles.componentPosition]}>
        <Image
          style={[
            styles.screenshot20240222At413,
            styles.screenshot20240222Layout,
          ]}
          contentFit="cover"
          source={require("../assets/screenshot-20240222-at-413-1.png")}
        />
        <View style={[styles.liked1, styles.likedPosition]}>
          <View style={[styles.likedChild, styles.likedBorder]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
      </View>
      <View style={[styles.component3, styles.componentPosition]}>
        <Image
          style={[
            styles.screenshot20240222At415,
            styles.screenshot20240222Layout,
          ]}
          contentFit="cover"
          source={require("../assets/screenshot-20240222-at-415-1.png")}
        />
        <View style={[styles.liked2, styles.likedPosition1]}>
          <View style={[styles.likedChild, styles.likedBorder]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
      </View>
      <View style={styles.screenshot20240222At411Parent}>
        <Image
          style={[
            styles.screenshot20240222At4111,
            styles.screenshot20240222Layout,
          ]}
          contentFit="cover"
          source={require("../assets/screenshot-20240222-at-411-2.png")}
        />
        <View style={[styles.liked3, styles.likedPosition1]}>
          <View style={[styles.likedChild, styles.likedBorder]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
      </View>
      <View
        style={[styles.bookmarkedlikedArticlesInner, styles.searchBarPosition]}
      >
        <View style={styles.likedChildPosition}>
          <Image
            style={[
              styles.screenshot20240222At417,
              styles.screenshot20240222Layout,
            ]}
            contentFit="cover"
            source={require("../assets/screenshot-20240222-at-417-1.png")}
          />
          <View style={[styles.liked4, styles.likedPosition]}>
            <View style={[styles.likedChild, styles.likedBorder]} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
          </View>
        </View>
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
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "28.13%",
    position: "absolute",
    overflow: "hidden",
  },
  screenshot20240222Layout: {
    borderRadius: Border.br_5xs,
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  likedPosition1: {
    right: "0%",
    top: "0%",
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
  componentPosition: {
    left: 183,
    position: "absolute",
  },
  likedPosition: {
    left: "82.22%",
    width: "17.78%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
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
    height: "3.94%",
    width: "8.53%",
    top: "8.5%",
    right: "84%",
    bottom: "87.56%",
    left: "7.47%",
    position: "absolute",
    overflow: "hidden",
  },
  screenshot20240222At411: {
    height: "94.94%",
    width: "92.9%",
    top: "5.06%",
    right: "7.1%",
  },
  likedChild: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
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
    height: "13.5%",
    width: "18.93%",
    bottom: "86.5%",
    left: "81.07%",
  },
  component4: {
    top: 374,
    left: 13,
    width: 169,
    height: 237,
    position: "absolute",
  },
  screenshot20240222At413: {
    height: "91.6%",
    width: "96.67%",
    top: "8.4%",
    right: "3.33%",
  },
  liked1: {
    height: "24.43%",
    bottom: "75.57%",
  },
  component2: {
    top: 375,
    height: 131,
    width: 180,
  },
  screenshot20240222At415: {
    height: "91.84%",
    width: "93.58%",
    top: "8.16%",
    right: "6.42%",
  },
  liked2: {
    height: "32.65%",
    width: "17.11%",
    bottom: "67.35%",
    left: "82.89%",
  },
  component3: {
    top: 518,
    width: 187,
    height: 98,
  },
  screenshot20240222At4111: {
    height: "95.93%",
    width: "92.18%",
    top: "4.07%",
    right: "7.82%",
  },
  liked3: {
    height: "13.01%",
    width: "17.88%",
    bottom: "86.99%",
    left: "82.12%",
  },
  screenshot20240222At411Parent: {
    top: 618,
    left: 193,
    width: 179,
    height: 246,
    position: "absolute",
  },
  screenshot20240222At417: {
    height: "96.41%",
    width: "95.56%",
    top: "3.59%",
    right: "4.44%",
  },
  liked4: {
    height: "16.41%",
    bottom: "83.59%",
  },
  likedChildPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  bookmarkedlikedArticlesInner: {
    top: 617,
    height: 195,
    width: 180,
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
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_mini,
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
