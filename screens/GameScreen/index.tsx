import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import Title from "../../components/Title";
import { generateRandomBetween } from "../../utils/number";
import NumberContainer from "../../components/Game/NumberContainer";
import PrimaryButton from "../../components/PrimaryButton";
import { Direction } from "../../constants/constants";
import Card from "../../components/Card";

interface IGameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<IGameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessNumbes, setGuessNumbers] = useState<number[]>([initialGuess]);

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
    setGuessNumbers((guessNumbes) => [newRndNumber, ...guessNumbes]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card nextGuesHandler={nextGuesHandler} />

      {/* {guessNumbes.map(number => <Text style={styles.gussedNumber}>{number}</Text>)} */}
      <FlatList
        data={guessNumbes}
        renderItem={({ item }) => (
          <Text style={styles.gussedNumber}>{item}</Text>
        )}
      />
    </View>
  );
};

export default GameScreen;
