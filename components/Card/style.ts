import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    borderColor: Colors.primary500,
    borderWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  buttonContainer: {
    width: "40%",
  },
  textContainer: {
    color: Colors.accent500,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
