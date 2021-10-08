import React from "react";
import { Text } from "react-native";
import styles from "./Styles";

const Heading = (props) => (
  <Text style={styles.heading}>
    {props.children}
  </Text>
);

export default Heading;