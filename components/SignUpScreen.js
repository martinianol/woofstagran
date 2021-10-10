import React from "react";
import { View, ScrollView, Button } from "react-native";
import Heading from "./Basic Components/Heading";
import { useNavigation } from "@react-navigation/native";


// The screen rendering everything
const SignUpScreen = () => {
  const nav = useNavigation();
  return (
    <ScrollView >
      <Heading>Sign Up</Heading>
      <Button
        title="Main"
        onPress={() => nav.navigate('Main')}
      />
    </ScrollView>
  )
};

export default SignUpScreen;
