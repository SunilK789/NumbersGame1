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
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;
