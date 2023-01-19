import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#212121",
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 15,
    color: "#212121",
    paddingVertical: 5,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderBottomColor: "#97A1D8",
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
