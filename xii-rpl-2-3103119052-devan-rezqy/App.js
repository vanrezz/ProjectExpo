import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HalLogin from './components/login';
import HalRegister from './components/register';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={HalLogin} />
        <Stack.Screen name="Register" component={HalRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
