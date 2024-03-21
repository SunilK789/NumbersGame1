import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

interface INumberContainerProps {
  children: any;
}

const NumberContainer: React.FC<INumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {!(children === null || children === undefined) && (
        <Text style={styles.numberText}>{children}</Text>
      )}
    </View>
  );
};

export default NumberContainer;
