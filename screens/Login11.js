import * as React from "react";
import { Text, StyleSheet, TextInput, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Login11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login2}>
      <Text style={styles.whatsYourName}>What’s your name?</Text>
      <TextInput
        style={styles.password}
        placeholder="Enter Name"
        placeholderTextColor="#242424"
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={styles.login2Child}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whatsYourName: {
    top: 148,
    left: 28,
    fontSize: 27,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 319,
    position: "absolute",
  },
  password: {
    marginTop: -206,
    marginLeft: -161.5,
    top: "50%",
    left: "50%",
    width: 327,
    height: 68,
    fontFamily: FontFamily.text,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.72%",
    width: "2.13%",
    top: "8.5%",
    right: "80.27%",
    bottom: "89.78%",
    left: "17.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  login2Child: {
    height: "3.94%",
    width: "8.8%",
    top: "7.39%",
    right: "76.53%",
    bottom: "88.67%",
    left: "14.67%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  login2: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login11;
