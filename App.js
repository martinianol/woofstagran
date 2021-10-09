import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import HomeScreen from './components/HomeScreen';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
      <HomeScreen />
    </SafeAreaView>
  )
};


