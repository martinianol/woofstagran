import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import HomeScreen from './components/HomeScreen';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    Kanit: require('./assets/fonts/Kanit-SemiBold.ttf')
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
      <HomeScreen />
    </SafeAreaView>
  )
};


