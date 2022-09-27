import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Register, RecoverPassword, DogDetails } from '../screens';

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Feed'
      activeColor={'#53B175'}
      inactiveColor={'#616161'}
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: () => <TabBarIcon key='Home' />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const TabBarIcon = () => {
  return <AntDesign size={26} color={'#53B175'} />;
};

const FeedStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: false }}>
      <FeedStack.Screen name='Register' component={Register} />
      <FeedStack.Screen name='RecoverPassword' component={RecoverPassword} />
    </FeedStack.Navigator>
  );
};

export default BottomTabNavigator;
