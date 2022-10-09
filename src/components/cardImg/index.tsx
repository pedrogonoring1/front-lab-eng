import React from 'react';
import { Image, Pressable, useWindowDimensions } from 'react-native';
import { makeStyles } from './styles';

export interface CardImgProps {
  onPress?: () => void;
}

export const CardImg: React.FC<CardImgProps> = ({ onPress }) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  return onPress ? (
    <Pressable onPress={onPress} style={styles.cardImg}>
      <Image style={styles.cardImg} source={require('../../assets/images/dog.png')} />
    </Pressable>
  ) : (
    <Pressable style={styles.cardImg}>      
      <Image style={styles.cardImg} source={require('../../assets/images/dog.png')} />
    </Pressable>
  );
};
