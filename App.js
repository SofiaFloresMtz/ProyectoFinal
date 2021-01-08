import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import ComidaProvider from './Context/ComidaContext';

export default function App() {
  return (
    <ComidaProvider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </ComidaProvider>
  );
}