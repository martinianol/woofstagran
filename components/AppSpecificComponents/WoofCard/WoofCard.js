import React from "react";
import { View } from "react-native";
import Avatar from "../../Basic Components/Avatar";
import Title from "../../Basic Components/Title";
import styles from "./styles";

const WoofCard = (props) => (
  <View style={styles.card}>
    <Avatar url={props.url} />
    <Title name={props.name}></Title>
  </View>
);

export default WoofCard;