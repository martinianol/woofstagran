import React from "react";
import { View } from "react-native";
import styles from "./styles";
import WoofPost from "../AppSpecificComponents/WoofPost/WoofPost";

const WoofPostContainer = (props) => (
  <View style={styles.container}>
    <WoofPost url={"https://picsum.photos/128/128"} />
    <WoofPost url={"https://picsum.photos/128/128"} />
    <WoofPost url={"https://picsum.photos/128/128"} />
    <WoofPost url={"https://picsum.photos/128/128"} />
    <WoofPost url={"https://picsum.photos/128/128"} />
    <WoofPost url={"https://picsum.photos/128/128"} />
  </View>
);

export default WoofPostContainer;