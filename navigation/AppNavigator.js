import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import TextSearchScreen from '../screens/TextSearchScreen';
import LensScreen from '../screens/LensScreen';
import ResultsScreen from '../screens/ResultsScreen';
import VoiceSearchScreen from '../components/Voicesearch';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TextSearch" component={TextSearchScreen} />
      <Stack.Screen name="Lens" component={LensScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="VoiceSearchScreen" component={VoiceSearchScreen} />
    </Stack.Navigator>
  );
}
