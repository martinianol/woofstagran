import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';


//Components

import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import MainNavigator from './components/MainNavigator';



const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
        /*   screenOptions={{
            headerShown: false,
          }} */
        >
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
};


