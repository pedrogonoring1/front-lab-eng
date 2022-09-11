import React from 'react';
import { Text } from '@rneui/themed';
import { Pressable, useWindowDimensions } from 'react-native';
import { makeStyles } from './styles';

export interface ButtonProps {
  screen?: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ screen, text }) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  return screen ? (
    <Pressable onPress={screen} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  ) : (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};
