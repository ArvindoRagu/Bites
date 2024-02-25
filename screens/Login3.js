import * as React from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Login3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login3}>
      <TextInput
        style={[styles.password, styles.passwordPosition2]}
        placeholder="Username"
        placeholderTextColor="#242424"
      />
      <View style={styles.password1}>
        <View style={styles.passwordChild} />
        <TextInput
          style={[styles.password2, styles.passwordPosition1]}
          placeholder="Email"
          placeholderTextColor="#242424"
        />
        <TextInput
          style={[styles.password3, styles.passwordPosition2]}
          placeholder="Password"
          placeholderTextColor="#242424"
        />
      </View>
      <Pressable
        style={[styles.password4, styles.passwordPosition]}
        onPress={() => navigation.navigate("InterestsSetup")}
      >
        <View style={[styles.passwordItem, styles.passwordPosition]} />
        <Text style={[styles.password5, styles.passwordPosition1]}>
          Continue
        </Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={styles.login3Child}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordPosition2: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.text,
    height: 68,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  passwordPosition1: {
    opacity: 0.4,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  passwordPosition: {
    height: 52,
    width: 327,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  password: {
    marginTop: -198,
    marginLeft: -162.5,
    fontSize: FontSize.size_xl,
  },
  passwordChild: {
    marginTop: -83,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_base,
    height: 68,
    width: 327,
    left: "50%",
    top: "50%",
    marginLeft: -162.5,
    position: "absolute",
  },
  password2: {
    marginTop: -62.1,
    marginLeft: -146.5,
    fontFamily: FontFamily.text,
    opacity: 0.4,
  },
  password3: {
    marginTop: 15,
    marginLeft: -164.5,
  },
  password1: {
    marginTop: -102,
    width: 329,
    height: 166,
    marginLeft: -164.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  passwordItem: {
    marginTop: -26,
    marginLeft: -163.5,
    backgroundColor: Color.colorMediumpurple,
    borderRadius: Border.br_base,
  },
  password5: {
    marginTop: -10,
    marginLeft: -147.5,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.rubikExtraBold,
    color: Color.colorGray,
    textAlign: "center",
    width: 286,
  },
  password4: {
    marginTop: 108,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginLeft: -164.5,
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "8.99%",
    right: "80.53%",
    bottom: "89.29%",
    left: "17.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  login3Child: {
    height: "3.94%",
    width: "8.8%",
    top: "7.88%",
    right: "76.8%",
    bottom: "88.18%",
    left: "14.4%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  login3: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login3;
