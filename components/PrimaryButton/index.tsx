import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";

interface IPrimaryButtonProps {
  children: any;
  onPress: () => void;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  children,
  onPress,
}) => {
  const hanldePress = () => {
    onPress();
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={hanldePress}
        android_ripple={{ color: "blue" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
