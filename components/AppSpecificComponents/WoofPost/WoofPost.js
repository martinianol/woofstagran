import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const WoofPost = (props) => (
  <View style={styles.layout}>
    <Image source={{ uri: props.image }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{props.description}</Text>
    </View>
  </View>
);

export default WoofPost;