import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";
import Colors from "../../constants/colors";

interface IPrimaryButtonProps {
  children: any;
  onPress?: () => void;
  style?: any
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  children,
  onPress,
  style
}) => {
  const hanldePress = () => {
    onPress();
  };

  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={hanldePress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
