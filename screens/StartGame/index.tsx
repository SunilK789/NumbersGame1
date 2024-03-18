import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "./style";

type Props = {};

const StartGame = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGame;
