import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../pages/Login/index';
import { Tasks } from '../pages/Tasks/index';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <Stack.Navigator
      screenOptions={{ 
        headerShown: false 
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Tasks"
        component={Tasks}
      />
    </Stack.Navigator>
  )
}