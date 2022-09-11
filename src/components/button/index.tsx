import React from 'react';
import { Text } from '@rneui/themed';
import { Pressable, useWindowDimensions } from 'react-native';
import { makeStyles } from './styles';

export interface ButtonProps {
  onPress?: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ onPress, text }) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  return onPress ? (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  ) : (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};
