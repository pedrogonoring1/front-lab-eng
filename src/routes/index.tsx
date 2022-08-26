import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Splash } from '../screens'

export type RootStackParamList = {
  Splash: undefined
  Login: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
console.log('oi')

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
