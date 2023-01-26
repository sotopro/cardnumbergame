import { StyleSheet, Dimensions, StatusBar } from "react-native";

import { colors } from "../../constants";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: height * 0.15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontFamily: "Karma-Bold",
    color: colors.white,
  },
});
