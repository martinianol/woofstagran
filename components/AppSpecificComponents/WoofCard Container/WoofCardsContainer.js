import React from "react";
import { View } from "react-native";
import styles from "./styles";
import WoofCard from "../WoofCard/WoofCard";


const WoofCardsContainer = (props) => (
  <View style={styles.container}>
    <WoofCard url="https://picsum.photos/64/64" name="rex" />
    <WoofCard url="https://picsum.photos/64/64" name="ted" />
    <WoofCard url="https://picsum.photos/64/64" name="dan" />
    <WoofCard url="https://picsum.photos/64/64" name="sam" />
    <WoofCard url="https://picsum.photos/64/64" name="sun" />
  </View>
);

export default WoofCardsContainer;
