import React from "react";
import { View, ScrollView, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const Tab = createBottomTabNavigator();

const FeedScreen = () => {
  return (
    <View>
      <Text>Feed Screen</Text>
    </View>
  )
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  )
};
const CatalogScreen = () => {
  return (
    <View>
      <Text>Catalog Screen</Text>
    </View>
  )
};

// The screen rendering everything
const MainNavigator = () => {

  return (

    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home" >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Catalog" component={CatalogScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  )
};

export default MainNavigator;
