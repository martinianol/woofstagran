import React from "react";
import { View } from "react-native";
import styles from "./styles";
import WoofCard from "../WoofCard/WoofCard";
import data from "../../../data/data";

const WoofCardsContainer = (props) => (
  <View style={styles.container}>
    {data.woofs.map((woof) => {
      return (
        <WoofCard
          url={woof.avatar}
          name={woof.name}
          key={woof.id} />
      )
    })
    }
  </View>
);

export default WoofCardsContainer;
