import React from 'react';
import { useWindowDimensions, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';
import { makeStyles } from './styles';

type loginScreen = StackNavigationProp<RootStackParamList, 'Loading'>;

export const Loading: React.FC = () => {
  const navigation = useNavigation<loginScreen>();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  setTimeout(() => navigation.navigate('Login'), 2000);

  return (
    <View style={styles.body}>
        <Image source={require('../../assets/dogLoading.png')} />
    </View>
  );
};
