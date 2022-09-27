import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    cardImg: {
      display: 'flex',
      alignSelf: 'center',
      width: 325 / fontScale,
      height: 325 / fontScale,
      borderRadius: 30 / fontScale,
      marginBottom: 24 / fontScale,
      backgroundColor: color.purple,
    },
  });
