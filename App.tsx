import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number>();

  const pickedNumberHandler = (number: number) => {
    console.log("number:", number);
    setPickedNumber(number);
  };

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;
  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.rootContainer}
        resizeMode="cover"
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15,
  },
});
