import { View, Text } from "react-native";
import React from "react";

interface IPrimaryButtonProps {
  children: any;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
