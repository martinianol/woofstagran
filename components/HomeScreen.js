import React from "react";
import { ScrollView } from "react-native";
import Heading from "./Basic Components/Heading";
import Avatar from "./Basic Components/Avatar";
import Title from "./Basic Components/Title";

// The screen rendering everything
const HomeScreen = () => (
  <ScrollView>
    <Heading>Generic heading</Heading>
    <Avatar url="https://picsum.photos/64/64" />
    <Title>Generic title</Title>
  </ScrollView>
);

export default HomeScreen;
