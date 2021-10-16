import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { 
  useFonts, 
  BalsamiqSans_400Regular, 
  BalsamiqSans_700Bold 
} from '@expo-google-fonts/balsamiq-sans';
import { Router } from './src/routes/router';

import { LoadingPage } from './src/components/LoadingPage';
import colors from './src/styles/colors';

export default function App() {
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold
  });

  if(!fontsLoaded) {
    return <LoadingPage />
  }
  return (
    <View style={{flex: 1, backgroundColor: colors.coral}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
}