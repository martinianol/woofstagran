import React from "react";
import { View, ScrollView, Button } from "react-native";
import Heading from "./Basic Components/Heading";
import { useNavigation } from "@react-navigation/native";


// The screen rendering everything
const SignInScreen = () => {
  const nav = useNavigation();

  return (
    <ScrollView >
      <Heading>Sign In</Heading>
      <Button
        title="Sign Up"
        onPress={() => nav.navigate('SignUp')}
      />
    </ScrollView>
  )
};

export default SignInScreen;
