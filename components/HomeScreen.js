import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import Heading from "./Basic Components/Heading";
import WoofCardsContainer from "./AppSpecificComponents/WoofCard Container/WoofCardsContainer";
import WoofPostContainer from "./AppSpecificComponents/WoofPostContainer/WoofPostContainer";

// The screen rendering everything
const HomeScreen = () => (
  <ScrollView >
    <Heading>Trending Woofs</Heading>
    <ScrollView horizontal={true}>
      <WoofCardsContainer />
    </ScrollView>
    <Heading>New Woofs Posts</Heading>
    <WoofPostContainer />
  </ScrollView>
);

export default HomeScreen;
