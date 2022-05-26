import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Home from './src/screens/Home';
import Load from './src/screens/Load';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

const App = () => {

  return (
    
    <NavigationContainer>
      <MainStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
