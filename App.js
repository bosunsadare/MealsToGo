// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { PaperProvider } from 'react-native-paper'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <PaperProvider>
      <RestaurantsScreen />
      {/* <ExpoStatusBar style="auto" /> */}
    </PaperProvider>
  );
}
