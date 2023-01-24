import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
  },
  number: {
    fontSize: 22,
    fontFamily: "Karma-Bold",
  },
});
