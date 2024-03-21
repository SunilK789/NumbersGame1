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

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<Number>();

  const pickedNumberHandler = (number: Number) => {
    console.log("number:", number);
    setPickedNumber(number);
  };

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;
  if (pickedNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.rootContainer}
        resizeMode="cover"
        imageStyle={styles.bgImage}
      >
        {screen}
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
