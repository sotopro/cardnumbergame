import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../constants";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: height * 0.15,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Karma-Bold",
    color: colors.white,
  },
});
