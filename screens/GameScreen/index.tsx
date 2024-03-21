import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Title from "../../components/Title";
import { generateRandomBetween } from "../../utils/number";
import NumberContainer from "../../components/Game/NumberContainer";

interface IGameScreenProps {
  userNumber: number;
}

const GameScreen: React.FC<IGameScreenProps> = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;
