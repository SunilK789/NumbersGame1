import { View, Text } from "react-native";
import React from "react";
import Title from "../Title";
import PrimaryButton from "../PrimaryButton";
import { Direction } from "../../constants/constants";
import { styles } from "./style";

const Card = ({ nextGuesHandler }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Higher or lower?</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={nextGuesHandler.bind(this, Direction.greater)}
          >
            +
          </PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuesHandler.bind(this, Direction.lower)}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default Card;
