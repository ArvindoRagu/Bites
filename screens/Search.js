import * as React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <TextInput style={styles.searchBar} />
      <Text style={styles.askAnything}>Ask anything...</Text>
      <Text style={[styles.bites, styles.bitesTypo]}>Bites</Text>
      <Text style={[styles.discover, styles.bitesTypo]}>Discover</Text>
      <Text style={styles.ex}>Ex:</Text>
      <View style={[styles.searchBar1, styles.searchPosition1]}>
        <View style={[styles.searchBarChild, styles.searchBorder]} />
      </View>
      <View style={[styles.searchBar2, styles.searchPosition1]}>
        <View style={[styles.searchBarItem, styles.searchBorder]} />
      </View>
      <View style={[styles.searchBar3, styles.searchPosition]}>
        <View style={[styles.searchBarChild, styles.searchBorder]} />
      </View>
      <View style={[styles.searchBar4, styles.searchPosition]}>
        <View style={[styles.searchBarItem, styles.searchBorder]} />
        <Text style={[styles.bestNewLaptop, styles.bestTypo1]}>
          Best New Laptop 2024
        </Text>
      </View>
      <Text style={[styles.bestNewLaptop1, styles.bestTypo1]}>
        Best New Laptop 2024
      </Text>
      <Text style={[styles.bestNewLaptop2, styles.bestTypo]}>
        Best New Laptop 2024
      </Text>
      <Text style={[styles.bestNewLaptop3, styles.bestTypo]}>
        Best New Laptop 2024
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bitesTypo: {
    fontFamily: FontFamily.title,
    fontWeight: "500",
    letterSpacing: -0.7,
    fontSize: FontSize.size_15xl,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  searchPosition1: {
    top: 255,
    height: 19,
    position: "absolute",
  },
  searchBorder: {
    borderWidth: 0.2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    height: 19,
    position: "absolute",
  },
  searchPosition: {
    top: 230,
    position: "absolute",
  },
  bestTypo1: {
    height: 20,
    width: 113,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  bestTypo: {
    top: 258,
    height: 20,
    width: 113,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  searchBar: {
    top: 168,
    left: 24,
    width: 327,
    height: 52,
    position: "absolute",
  },
  askAnything: {
    top: 184,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    width: 286,
    opacity: 0.4,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.rubikRegular,
    left: 39,
    position: "absolute",
  },
  bites: {
    top: 106,
    left: 146,
  },
  discover: {
    top: 301,
    left: 83,
  },
  ex: {
    top: 229,
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    left: 39,
    position: "absolute",
  },
  searchBarChild: {
    width: 125,
  },
  searchBar1: {
    left: 34,
    height: 19,
    width: 125,
  },
  searchBarItem: {
    width: 135,
  },
  searchBar2: {
    left: 165,
    width: 135,
    height: 19,
  },
  searchBar3: {
    left: 72,
    height: 19,
    width: 125,
  },
  bestNewLaptop: {
    top: 3,
    left: 8,
  },
  searchBar4: {
    left: 205,
    height: 23,
    width: 135,
  },
  bestNewLaptop1: {
    top: 233,
    left: 78,
  },
  bestNewLaptop2: {
    left: 41,
  },
  bestNewLaptop3: {
    left: 173,
  },
  search: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Search;
