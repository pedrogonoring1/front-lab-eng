import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, RecoverPassword } from '../screens';

export type RootStackParamList = {
  Register: undefined;
  RecoverPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='RecoverPassword' component={RecoverPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
