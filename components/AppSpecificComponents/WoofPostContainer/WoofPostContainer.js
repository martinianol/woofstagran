import React from "react";
import { View } from "react-native";
import styles from "./styles";
import WoofPost from "../WoofPost/WoofPost";
import data from "../../../data/data";

const WoofPostContainer = (props) => (
  <View style={styles.container}>
    {data.posts.map(post => {
      return (
        <WoofPost
          key={post.id}
          title={post.title}
          description={post.description}
          image={post.image}
        />

      )
    })
    }
  </View>
);

export default WoofPostContainer;