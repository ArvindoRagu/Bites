import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const InterestManager = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.interestManager}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.myInterests}>My Interests</Text>
      <Pressable
        style={styles.interestManagerChild}
        onPress={() => navigation.goBack()}
      />
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={styles.password}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa11")}
        >
          <Text style={styles.entertainment}>Entertainment</Text>
        </Pressable>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={styles.password}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa11")}
        >
          <Text style={styles.entertainment}>Finance</Text>
        </Pressable>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={styles.password}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa11")}
        >
          <Text style={styles.entertainment}>{`Science & Tech`}</Text>
        </Pressable>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={styles.password}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa11")}
        >
          <Text style={styles.entertainment}>{`Art & Literature`}</Text>
        </Pressable>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={styles.password}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa11")}
        >
          <Text style={styles.entertainment}>Politics</Text>
        </Pressable>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={styles.password}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa11")}
        >
          <Text style={styles.entertainment}>Lifestyle</Text>
        </Pressable>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
      </View>
      <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={styles.password}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa11")}
        >
          <Text style={styles.entertainment}>Other</Text>
        </Pressable>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 60,
    width: 327,
    left: 24,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "11.82%",
    right: "84.8%",
    bottom: "86.45%",
    left: "13.07%",
  },
  myInterests: {
    top: 156,
    left: 28,
    fontSize: FontSize.size_16xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.colorBlack,
    width: 319,
    textAlign: "left",
    position: "absolute",
  },
  interestManagerChild: {
    height: "3.94%",
    width: "8.8%",
    top: "10.71%",
    right: "81.07%",
    bottom: "85.34%",
    left: "10.13%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  entertainment: {
    height: "38.5%",
    width: "87.46%",
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontFamily: FontFamily.rubikRegular,
    color: Color.colorGray,
    display: "flex",
    alignItems: "center",
    opacity: 0.4,
    textAlign: "left",
  },
  password: {
    left: "4.89%",
    top: "30.83%",
    position: "absolute",
  },
  expandRightIcon: {
    height: "40%",
    width: "7.34%",
    top: "30%",
    right: "6.73%",
    bottom: "30%",
    left: "85.93%",
  },
  rectangleParent: {
    top: 206,
  },
  rectangleGroup: {
    top: 277,
  },
  rectangleContainer: {
    top: 346,
  },
  groupView: {
    top: 417,
  },
  rectangleParent1: {
    top: 488,
  },
  rectangleParent2: {
    top: 559,
  },
  rectangleParent3: {
    top: 631,
  },
  interestManager: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default InterestManager;
