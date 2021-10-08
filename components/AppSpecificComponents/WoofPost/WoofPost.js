import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const WoofPost = (props) => (
  <View style={styles.layout}>
    <Image source={{ uri: props.url }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>happy woofs</Text>
      <Text style={styles.description}>How to keep your Woof happy and healthy. We’ve asked some of ...</Text>
    </View>
  </View>
);

export default WoofPost;