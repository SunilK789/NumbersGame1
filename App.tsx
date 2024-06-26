import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState(false);

  const { width, height } = useWindowDimensions();

  const pickedNumberHandler = (number: number) => {
    console.log("number:", number);
    setPickedNumber(number);
  };

  const onGameOverHandler = () => {
    console.log("App gameover===>");
    setGameIsOver(true);
  };

  const onNewGameHandler = () => {
    setGameIsOver(false);
    setPickedNumber(0);
  };

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;
  if (pickedNumber) {
    screen = (
      <GameScreen userNumber={pickedNumber} onGameOver={onGameOverHandler} />
    );
  }

  if (gameIsOver) {
    console.log("redirect to Game Over===>");
    screen = <GameOver newGameHandler={onNewGameHandler} />;
  }
  const marginTopDistance = height < 380 ? 0 : 50;
  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={[styles.rootContainer, { marginTop: marginTopDistance }]}
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
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 50,
  },
  bgImage: {
    opacity: 0.15,
  },
});
