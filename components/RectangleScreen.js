import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const RectangleScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.rectanglePressable}
      onPress={() => navigation.navigate("YourInfocastPageFromMain")}
    />
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    width: 329,
    height: 103,
  },
});

export default RectangleScreen;
