import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";

interface IPrimaryButtonProps {
  children: any;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ children }) => {
  const hanldePress = () => {
    console.log("Pressed!!");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}
        onPress={hanldePress}
        android_ripple={{ color: "blue" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
