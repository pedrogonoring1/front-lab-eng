import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Register,
  RecoverPassword,
  Login,
  Loading,
  RecoverPasswordFinish,
  DashboardAdotador,
  DogDetails,
  ShelterDetails
} from '../screens';

export type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Register: undefined;
  RecoverPassword: undefined;
  RecoverPasswordFinish: { email: string };
  DashboardAdotador: undefined;
  DogDetails: undefined;
  ShelterDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='Loading' component={Loading} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='RecoverPassword' component={RecoverPassword} />
        <Stack.Screen name='RecoverPasswordFinish' component={RecoverPasswordFinish} />
        <Stack.Screen name='DashboardAdotador' component={DashboardAdotador} />
        */}
        <Stack.Screen name='DogDetails' component={DogDetails} />
        {/* <Stack.Screen name='ShelterDetails' component={ShelterDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
