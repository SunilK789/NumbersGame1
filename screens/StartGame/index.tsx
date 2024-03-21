import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "./style";

type StartGameProps = {
  onPickedNumber: (number: Number) => void;
};

const StartGame: React.FC<StartGameProps> = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const confirmInputHandler = () => {
    console.log("Pressed...");
    const chosenNumber = parseInt(enteredNumber);
    validateNumber(chosenNumber);
    console.log("number===>", enteredNumber);
    onPickedNumber(chosenNumber);
  };
  const resetHandler = () => {
    setEnteredNumber("");
  };

  const validateNumber = (chosenNumber: number) => {
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);

      return;
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={(e) => setEnteredNumber(e)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;
