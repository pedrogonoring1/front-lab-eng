import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, RecoverPassword, Login, DogDetails } from '../screens';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  RecoverPassword: undefined;
  DogDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='RecoverPassword' component={RecoverPassword} />
        <Stack.Screen name='DogDetails' component={DogDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
