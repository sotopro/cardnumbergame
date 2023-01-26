import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containterScroll: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: "Karma-Medium",
    color: colors.text,
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  label: {
    fontSize: 15,
    color: colors.text,
    paddingVertical: 5,
    textAlign: "center",
    fontFamily: "Karma-Regular",
  },
  input: {
    width: "100%",
    maxWidth: 40,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  confirmedContainer: {
    width: "75%",
    height: 180,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  confirmedTitle: {
    fontSize: 16,
    fontFamily: "Karma-Regular",
  },
});
