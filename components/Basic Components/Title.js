import React from "react";
import { Text } from "react-native";
import styles from "./Styles";

const Title = (props) => (
  <Text style={styles.title}>
    {props.name}
  </Text>
);

export default Title;