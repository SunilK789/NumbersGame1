import { Platform, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.white,
    padding: 12,
    borderRadius: 5,
  },
});
