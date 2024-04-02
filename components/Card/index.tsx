import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import Title from "../Title";
import PrimaryButton from "../PrimaryButton";
import { Direction } from "../../constants/constants";
import { styles } from "./style";
import NumberContainer from "../Game/NumberContainer";

const Card = ({ nextGuesHandler, currentGuess }) => {
  const { width, height } = useWindowDimensions();

  let content = (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Higher or lower?</Text>
      </View>
      <NumberContainer>{currentGuess}</NumberContainer>
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
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuesHandler.bind(this, Direction.greater)}
            >
              +
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuesHandler.bind(this, Direction.lower)}
            >
              -
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return <View style={styles.mainContainer}>{content}</View>;
};

export default Card;
