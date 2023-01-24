import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    paddingVertical: 20,
  },
  content: {
    width: "75%",
    height: 200,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
    fontFamily: "Karma-Medium",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
