import React from "react";
import { Image } from "react-native";
import styles from "./Styles";

const Avatar = (props) => (
  <Image
    style={styles.avatar}
    source={{ uri: props.url }}
  />
);

export default Avatar;