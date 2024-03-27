import { View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title";
import PrimaryButton from "../../components/PrimaryButton";
import { styles } from "./style";

const GameOver = ({ newGameHandler }) => {
  return (
    <View>
      <Title>Game Over</Title>
      <PrimaryButton style={styles.btnNewGame} onPress={newGameHandler}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOver;
