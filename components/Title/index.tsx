import { View, Text } from "react-native";
import React, { Children } from "react";
import { styles } from "./style";

interface ITitleProps {
  children: any;
}

const Title: React.FC<ITitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children} </Text>;
};

export default Title;
