import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StartGame />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
