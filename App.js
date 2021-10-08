import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
    <HomeScreen />
  </SafeAreaView>
);

export default App;
