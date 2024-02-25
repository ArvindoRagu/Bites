import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InterestManager = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.interestManager}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.myInterests}>My Interests</Text>
      <Pressable
        style={styles.interestManagerChild}
        onPress={() => navigation.goBack()}
      />
      <View style={[styles.interest, styles.interestPosition]}>
        <Image
          style={[styles.expandRightIcon, styles.expandIconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
        <View style={[styles.interestChild, styles.interestChildLayout]} />
        <Pressable
          style={styles.passwordPosition}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
        >
          <Text style={[styles.entertainment, styles.otherLayout]}>
            Entertainment
          </Text>
        </Pressable>
      </View>
      <View style={[styles.interest1, styles.interestLayout]}>
        <Image
          style={[styles.expandRightIcon1, styles.expandIconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
        <View style={[styles.interestItem, styles.interestChildLayout]} />
        <Pressable
          style={styles.passwordPosition}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
        >
          <Text style={[styles.other, styles.otherLayout]}>Other</Text>
        </Pressable>
      </View>
      <View style={[styles.interest2, styles.interestLayout]}>
        <Image
          style={[styles.expandRightIcon1, styles.expandIconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
        <View style={[styles.interestItem, styles.interestChildLayout]} />
        <Pressable
          style={styles.passwordPosition}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
        >
          <Text style={[styles.other, styles.otherLayout]}>Lifestyle</Text>
        </Pressable>
      </View>
      <View style={[styles.interest3, styles.interestLayout]}>
        <Image
          style={[styles.expandRightIcon1, styles.expandIconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
        <View style={[styles.interestItem, styles.interestChildLayout]} />
        <Pressable
          style={styles.passwordPosition}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
        >
          <Text style={[styles.other, styles.otherLayout]}>Politics</Text>
        </Pressable>
      </View>
      <View style={[styles.interest4, styles.interestLayout]}>
        <Image
          style={[styles.expandRightIcon1, styles.expandIconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
        <View style={[styles.interestItem, styles.interestChildLayout]} />
        <Pressable
          style={styles.passwordPosition}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
        >
          <Text
            style={[styles.other, styles.otherLayout]}
          >{`Art & Literature`}</Text>
        </Pressable>
      </View>
      <View style={[styles.interest5, styles.interestPosition]}>
        <Image
          style={[styles.expandRightIcon1, styles.expandIconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
        <View style={[styles.interestChild2, styles.interestChildLayout]} />
        <Pressable
          style={styles.passwordPosition}
          onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
        >
          <Text
            style={[styles.scienceTech, styles.otherLayout]}
          >{`Science & Tech`}</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.interest6, styles.interestChildLayout]}
        onPress={() => navigation.navigate("ViewFullPageButtonFromMa")}
      >
        <Image
          style={[styles.expandRightIcon6, styles.expandIconLayout]}
          contentFit="cover"
          source={require("../assets/expand-right.png")}
        />
        <View style={[styles.interestChild3, styles.interestChildLayout]} />
        <Text style={[styles.password6, styles.otherLayout]}>Finance</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  interestPosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  expandIconLayout: {
    height: 24,
    width: 24,
    left: 281,
    position: "absolute",
  },
  interestChildLayout: {
    height: 60,
    width: 327,
    position: "absolute",
  },
  otherLayout: {
    opacity: 0.4,
    height: 23,
    width: 286,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray,
    fontFamily: FontFamily.text,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    marginLeft: -147.5,
    textAlign: "left",
  },
  interestLayout: {
    height: 116,
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
  expandRightIcon: {
    top: 462,
  },
  interestChild: {
    marginTop: -243,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    marginLeft: -163.5,
    height: 60,
    left: "50%",
    top: "50%",
  },
  entertainment: {
    marginTop: -224.5,
  },
  passwordPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  interest: {
    top: 222,
    height: 486,
  },
  expandRightIcon1: {
    top: 0,
  },
  interestItem: {
    marginTop: -2,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    marginLeft: -163.5,
    height: 60,
    left: "50%",
    top: "50%",
  },
  other: {
    marginTop: 16.5,
  },
  interest1: {
    top: 610,
  },
  interest2: {
    top: 536,
  },
  interest3: {
    top: 462,
  },
  interest4: {
    top: 388,
  },
  interestChild2: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    marginLeft: -163.5,
    height: 60,
    left: "50%",
    top: "50%",
  },
  scienceTech: {
    marginTop: 53.5,
  },
  interest5: {
    top: 240,
    height: 190,
  },
  expandRightIcon6: {
    top: 18,
  },
  interestChild3: {
    marginTop: -30,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    marginLeft: -163.5,
    height: 60,
    left: "50%",
    top: "50%",
  },
  password6: {
    marginTop: -11.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  interest6: {
    top: 296,
    height: 60,
    left: 24,
  },
  interestManager: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default InterestManager;
