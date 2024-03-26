import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import Title from "../../components/Title";
import { generateRandomBetween } from "../../utils/number";
import NumberContainer from "../../components/Game/NumberContainer";
import PrimaryButton from "../../components/PrimaryButton";
import { Direction } from "../../constants/constants";

interface IGameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<IGameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      Alert.alert("i found the number", currentGuess.toString(), [
        { text: "Finish", style: "default" },
      ]);
      console.log("currentGuess===>", currentGuess);
      onGameOver();
    }
  }, [currentGuess, onGameOver, userNumber]);

  const nextGuesHandler = (direction: string) => {
    console.log("min===>", minBoundary, "Max===>", maxBoundary);
    if (
      (direction === Direction.lower && currentGuess < userNumber) ||
      (direction === Direction.greater && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === Direction.lower) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton
            onPress={nextGuesHandler.bind(this, Direction.greater)}
          >
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuesHandler.bind(this, Direction.lower)}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;
